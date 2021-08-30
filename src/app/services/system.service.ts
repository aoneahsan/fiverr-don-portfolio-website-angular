import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  private _cookieNotificationKey: string = 'X_SITE_COOKIES_INFO';

  constructor() {}

  getCookieNotificationKey() {
    return this._cookieNotificationKey;
  }
}
