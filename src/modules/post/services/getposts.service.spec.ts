import { Test, TestingModule } from '@nestjs/testing';
import { GetpostsService } from './getposts.service';

describe('GetpostsService', () => {
  let provider: GetpostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetpostsService],
    }).compile();

    provider = module.get<GetpostsService>(GetpostsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
