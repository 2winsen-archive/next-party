import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NextPartyCountdownComponent } from './next-party-panel/next-party-countdown/next-party-countdown.component';
import { LatvianDatePipe } from './core/latvian-date.pipe';
import { NextPartyPanelComponent } from './next-party-panel/next-party-panel.component';
import { SlickCarouselComponent } from './slick-carousel/slick-carousel.component';
import { AddToCalendarComponent } from './next-party-panel/add-to-calendar/add-to-calendar.component';
import { ConfigService } from './core/config.service';
import { HttpClientModule } from '@angular/common/http';

function initializeAppFactory(configService: ConfigService) {
  return async () => {
    const config = await configService.getConfig();
    configService.cachedConfig = config;
  };
}
@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  declarations: [
    AppComponent,
    NextPartyCountdownComponent,
    LatvianDatePipe,
    NextPartyPanelComponent,
    SlickCarouselComponent,
    AddToCalendarComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
