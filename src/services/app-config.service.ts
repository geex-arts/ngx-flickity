import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class AppConfigService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isPlatformServer() {
    return isPlatformServer(this.platformId);
  }
}
