import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';
import { NgForm } from '@angular/forms';

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
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

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

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }

}
