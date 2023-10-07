import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EncoderService {
  async encode(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  async matches(password: string, passwordHash: string): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }
}
