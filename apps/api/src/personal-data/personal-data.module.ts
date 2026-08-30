import { Module } from '@nestjs/common';
import { personalDataController } from './personal-data.controller';
import { personalDataService } from './personal-data.service';

@Module({
  controllers: [personalDataController],
  providers: [personalDataService],
})
export class personalDataModule {}
