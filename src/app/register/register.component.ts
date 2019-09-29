import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  
  displayPopup: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {    }

  submitClicked(){
      console.log("resgiter form submit button is clicked");   
      this.displayPopup  = true;
  }


}
