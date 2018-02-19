import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form-reactive-test',
  templateUrl: './form-reactive-test.component.html',
  styleUrls: ['./form-reactive-test.component.css']
})
export class FormReactiveTestComponent implements OnInit {

  projectStatus = ['Stable', 'Critical', 'Finished'];
  form: FormGroup;


  constructor() {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      'project': new FormControl(null, Validators.required, this.validateProjectName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });
  }

  validateProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        control.value === 'Test' ? resolve({ 'projectNameInvalid': true }) : resolve(null);
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.form);
  }
}
