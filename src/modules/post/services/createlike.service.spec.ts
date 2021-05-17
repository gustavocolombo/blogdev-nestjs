import { Test, TestingModule } from '@nestjs/testing';
import { CreatelikeService } from './createlike.service';

describe('CreatelikeService', () => {
  let provider: CreatelikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatelikeService],
    }).compile();

    provider = module.get<CreatelikeService>(CreatelikeService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
