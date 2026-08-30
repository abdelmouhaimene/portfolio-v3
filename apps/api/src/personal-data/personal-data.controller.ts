import { Body, Controller, Get, Put } from '@nestjs/common';
import { personalDataService } from './personal-data.service';
import { personalDataType } from '@repo/types';

@Controller('personal-data')
export class personalDataController {
  constructor(private readonly personalDataService: personalDataService) {}

  @Get()
  getPersonalData() {
    return this.personalDataService.findAll();
  }

  @Put()
  updatePersonalData(@Body() data: personalDataType.PersonalDataUpdate) {
    return this.personalDataService.update(data);
  }
}
