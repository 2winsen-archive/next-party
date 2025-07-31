import { BrowserModule } from '@angular/platform-browser';
import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NextPartyCountdownComponent } from './next-party-panel/next-party-countdown/next-party-countdown.component';
import { LatvianDatePipe } from './core/latvian-date.pipe';
import { NextPartyPanelComponent } from './next-party-panel/next-party-panel.component';
import { SlickCarouselComponent } from './slick-carousel/slick-carousel.component';
import { AddToCalendarComponent } from './next-party-panel/add-to-calendar/add-to-calendar.component';
import { ConfigService } from './core/config.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ImageNamePipe } from './slick-carousel/image-name.pipe';

function initializeAppFactory(configService: ConfigService) {
  return async () => {
    const config = await configService.getConfig();
    configService.cachedConfig = config;
  };
}
@NgModule({ declarations: [
        AppComponent,
        NextPartyCountdownComponent,
        LatvianDatePipe,
        ImageNamePipe,
        NextPartyPanelComponent,
        SlickCarouselComponent,
        AddToCalendarComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule, BrowserAnimationsModule], providers: [
        provideAppInitializer(() => {
        const initializerFn = (initializeAppFactory)(inject(ConfigService));
        return initializerFn();
      }),
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
