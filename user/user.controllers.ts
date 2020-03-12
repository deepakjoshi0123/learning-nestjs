import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('signup')
  signup(
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('country') country: string,
    @Body('fullName') fullName: string,
  ) {
    console.log('hello world ');
    const generatedId = this.userService.signUp(
      email,
      password,
      country,
      fullName,
    );
    return { id: generatedId };
  }

  @Get('getprofile')
  getproducts(@Param('email') email: string) {
    return this.userService.getProfile(email);
  }

  @Post('login')
  login(@Body('email') email: string, @Body('password') password: string) {
    console.log('helllllo there');
    return this.userService.login(email, password);
  }
}
