import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './account/account.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
  ],
  controllers: [AccountController],

})
export class AppModule {}
