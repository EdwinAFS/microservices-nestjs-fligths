import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';
import { FlightModule } from './flight/flight.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    HomeModule,
    UserModule,
    PassengerModule,
    FlightModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
