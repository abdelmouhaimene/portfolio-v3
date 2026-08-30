import { Test, TestingModule } from '@nestjs/testing';
import { personalDataController } from './personal-data.controller';

describe('personalDataController', () => {
  let controller: personalDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [personalDataController],
    }).compile();

    controller = module.get<personalDataController>(personalDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
