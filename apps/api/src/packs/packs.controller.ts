import { Controller, Get } from '@nestjs/common';
import { PacksService } from './packs.service';

@Controller('packs')
export class PacksController {
  constructor(private readonly PacksService: PacksService) {}
  @Get()
  findAllPacks() {
    return this.PacksService.findAllPacks();
  }
  @Get('/tasks')
  findAllTasks() {
    return this.PacksService.findAllTasks();
  }
}
