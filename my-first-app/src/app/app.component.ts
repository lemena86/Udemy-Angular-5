import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  username = '';
  showParagraph = false;
  logButtonClicks = [];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  activeUsers = [];
  inactiveUsers = [];
  counter = 0;

  constructor(private userService: UserService, private counterService: CounterService) {
  }


  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.counter = this.counterService.count;
  }

  usernameIsEmpty() {
    return this.username === '';
  }

  onResetUsername() {
    this.username = '';
  }

  onDisplayDetails() {
    this.showParagraph = !this.showParagraph;
    this.logButtonClicks.push(+new Date);
  }

  onFiredNumer(number) {
    number % 2 === 0 ? this.evenNumbers.push(number) : this.oddNumbers.push(number);

  }

}
