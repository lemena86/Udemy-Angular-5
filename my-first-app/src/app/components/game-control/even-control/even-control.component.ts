import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-control',
  template: `<p>Even - {{number}}</p>`,
  styles: [`p{ color: red}`]
})
export class EvenControlComponent {
  @Input() number: number;
}
