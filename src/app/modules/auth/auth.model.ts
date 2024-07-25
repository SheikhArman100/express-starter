import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import config from '../../../config';
import { IUser, UserModel } from './auth.interface';
import { diskType } from './auth.constant';

const UserSchema = new Schema<IUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    imgUrl: {
      type: {
        diskType: {
          type: String,
          enum: diskType,
          required: true,
        },
        path: {
          type: String,
          required: true,
        },
        originalName: {
          type: String,
          required: true,
        },
        modifiedName: {
          type: String,
          required: true,
        },
      },
      required: false,
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      default: function () {
        return this.id;
      },
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      default: function () {
        return this.id;
      },
    },
  },
  {
    timestamps: true,
  },
);

// -------------- static methods ------------- //

// check user existence
UserSchema.statics.isUserExist = async function (
  email: string,
): Promise<IUser | null> {
  return await User.findOne(
    { email },
    { id: 1, password: 1, role: 1, isActive: 1 },
  );
};

// matching password
UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

// automatically hashed password
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.jwt.bcrypt_salt_rounds),
  );
  next();
});

export const User = model<IUser, UserModel>('User', UserSchema);
