import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {

  testForm: FormGroup;
  
  name: string;
  email: any;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required]      
    });
   }   

  ngOnInit() {
      this.onSubmit();
  }  
  
  onSubmit() {
    if(this.testForm.valid){
      console.log(this.testForm.value);
      console.log("form is valid");
    }
    else {
      console.log("form is not valid");
    }
  }



}
