import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG_URL } from '../utils/constants';
import { Config } from '../types/types';
import { environment } from 'src/environments/environment';
import conf from '../../../config.json';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public cachedConfig: Config | undefined;

  constructor(private http: HttpClient) {}

  getConfig(): Promise<Config> {
    const isProduction = environment.production;
    if (isProduction) {
      // To be able to add new custom build without redeploy
      return this.http
        .get<Config>(`${CONFIG_URL}?date=${Date.now()}`)
        .toPromise();
    } else {
      return Promise.resolve(conf);
    }
  }
}
