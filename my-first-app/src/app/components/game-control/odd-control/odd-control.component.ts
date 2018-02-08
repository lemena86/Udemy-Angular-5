import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-odd-control',
  template: `<p>Odd - {{number}}</p>`,
  styles: [`p{ color: blue}`]
})
export class OddControlComponent {
  @Input() number: number;
}
