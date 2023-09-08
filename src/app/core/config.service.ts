import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG_URL } from '../utils/constants';
import { Config } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public cachedConfig: Config | undefined;

  constructor(private http: HttpClient) {}

  getConfig(): Promise<Config> {
    return this.http.get<Config>(CONFIG_URL).toPromise();
  }
}
