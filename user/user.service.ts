import { Injectable } from '@nestjs/common';
import { User } from '../user/user.entity';
import { bcrypt } from 'bcrypt';
import { jwt } from 'jsonwebtoken';

@Injectable()
export class UsersService {
  async signUp(
    email: string,
    password: string,
    country: string,
    fullName: string,
  ) {
    try {
      const user1 = await User.findOne({ where: { email: email } });
      if (user1) {
        const err = new Error('user already exists ');
        throw err;
      }
      const hassedpw = await bcrypt.hash(password, 12);
      const result = await User.create({
        email: email,
        password: hassedpw,
        country: country,
        fullname: fullName,
      });
      if (!result || !hassedpw) throw new Error('unable to add user');
      return result.id;
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string) {
    try {
      const user1 = await User.findOne({ where: { email: email } });
      if (!user1) {
        const error = new Error('emailNotfound');
        throw error;
      }
      const isEqual = await bcrypt.compare(password, user1.password);
      if (!isEqual) {
        const error = new Error('wrong password');
        throw error;
      }
      const token = jwt.sign(
        {
          email: user1.email,
          userId: user1.id,
        },
        'KEYFORTOKEN',
        { expiresIn: '5h' },
      );
      const resData = { token: token, userId: user1.id };
      return resData;
    } catch (error) {
      console.log(error);
    }
  }

  async getProfile(email: string) {
    try {
      const result = await User.findOne({
        where: { email: email },
      });
      if (!result) {
        const err = new Error('error in search');
        throw err;
      }
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
