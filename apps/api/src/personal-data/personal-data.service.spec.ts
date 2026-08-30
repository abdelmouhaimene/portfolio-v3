import { Test, TestingModule } from '@nestjs/testing';
import { personalDataService } from './personal-data.service';

describe('personalDataService', () => {
  let service: personalDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [personalDataService],
    }).compile();

    service = module.get<personalDataService>(personalDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
