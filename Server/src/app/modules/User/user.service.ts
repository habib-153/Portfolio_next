import { TUser } from './user.interface';
import { User } from './user.model';

const createUser = async (payload: TUser) => {
  const user = await User.create(payload);

  return user;
};


const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id)
    .populate({
      path: 'followers',
      select: 'name email profilePhoto status isVerified', // Select only needed fields
    })
    .populate({
      path: 'following',
      select: 'name email profilePhoto status isVerified',
    });

  return user;
};

export const UserServices = {
  createUser,
  getSingleUserFromDB,
};
