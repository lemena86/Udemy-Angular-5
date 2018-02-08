import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `
    <div class='row'>
      <div class="col-xs-12">
        <button class="btn btn-default" (click)='onStartGame()'>Start</button>
        <button class="btn btn-default" (click)='onEndGame()'>End</button>
      </div>
    </div>
  `,
  styles: []
})
export class GameControlComponent {
  interval;
  count = 0;
  @Output() firedNumber: EventEmitter<number> = new EventEmitter();

  onStartGame() {
    this.interval = setInterval(() => {
      this.firedNumber.emit(++this.count);
    }, 1000);
  }

  onEndGame() {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }

}
