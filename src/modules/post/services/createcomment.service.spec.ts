import { Test, TestingModule } from '@nestjs/testing';
import { CreatecommentService } from './createcomment.service';

describe('CreatecommentService', () => {
  let provider: CreatecommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatecommentService],
    }).compile();

    provider = module.get<CreatecommentService>(CreatecommentService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
