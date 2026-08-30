import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';
// import { servicesType } from '@repo/types';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}
  @Get()
  findAll() {
    return this.servicesService.findAll();
  }
}
