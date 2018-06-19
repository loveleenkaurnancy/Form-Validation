import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pin : string = '12345';

  @ViewChild('signUpForm') signForm: NgForm;
  onSubmit() {
    console.log(this.signForm.value);
  }

}
