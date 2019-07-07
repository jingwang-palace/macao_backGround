import { Controller, Get, Req, Param, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { request } from 'https';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('logInfo')
  logInfo(@Query() query): string {
    return this.appService.logInfo(query);
  }
}
