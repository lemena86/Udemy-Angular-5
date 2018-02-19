import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-td-test',
  templateUrl: './form-td-test.component.html',
  styleUrls: ['./form-td-test.component.css']
})
export class FormTdTestComponent implements OnInit {

  defaultSubscription = 'advanced';
  subscription = {
    email: '',
    subscription: '',
    password: ''
  }

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: HTMLFormElement) {
    if (form.valid) {
      this.subscription.email = form.value.email1;
      this.subscription.subscription = form.value.subscription;
      this.subscription.password = form.value.password;
      console.log(this.subscription);
    }


  }

}
