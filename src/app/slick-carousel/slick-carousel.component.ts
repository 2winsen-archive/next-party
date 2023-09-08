import {
  Component,
  AfterViewInit,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';
import { ConfigService } from '../core/config.service';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.scss'],
})
export class SlickCarouselComponent implements AfterViewInit, OnInit {
  $carousel: JQuery;
  images: string[];

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private configService: ConfigService
  ) {}
  ngOnInit(): void {
    const config = this.configService.cachedConfig;
    this.images = config.images;
  }

  ngAfterViewInit() {
    const $el: any = $(this.el.nativeElement);
    this.zone.runOutsideAngular(() => {
      this.$carousel = $el.slick({
        dots: true,
        rows: 0,
      });
    });
  }
}
