import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Fireworks } from 'fireworks-js';

@Component({
  selector: 'app-fireworks',
  templateUrl: './fireworks.component.html',
  styleUrls: ['./fireworks.component.scss'],
  standalone: false,
})
export class FireworksComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;
  private fireworks?: Fireworks;

  ngOnInit() {
    this.fireworks = new Fireworks(this.container.nativeElement, {
      autoresize: true,
      opacity: 0.1,
      particles: 50,
      traceLength: 3,
      traceSpeed: 5,
      explosion: 5,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
    });
    this.fireworks.start();
  }

  ngOnDestroy() {
    this.fireworks?.stop(true);
  }
}
