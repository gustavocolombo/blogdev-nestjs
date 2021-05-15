import { Test, TestingModule } from '@nestjs/testing';
import { GetauthordataService } from './getauthordata.service';

describe('GetauthordataService', () => {
  let service: GetauthordataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetauthordataService],
    }).compile();

    service = module.get<GetauthordataService>(GetauthordataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
