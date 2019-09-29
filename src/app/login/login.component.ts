import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public router:Router;

  //openPopup: boolean = false;

    display = 'none';
    overlay = 'none';

  constructor(private fb: FormBuilder, private http:HttpClient,router:Router) { 
    this.router=router;
    this.loginForm=this.fb.group({
      'email':['',Validators.required],
      'password': ['',Validators.required]
  });  
  }

  ngOnInit() {  }

  loginClicked(): void {
    console.log("Login Clicked");
    //this.openPopup = true;
    
    this.http.post('http://127.0.0.1:5000/api/v1/work/work_login',this.loginForm.value).subscribe(
          response=>{
            console.log(response)
            localStorage.setItem('id',response['_id'])
            localStorage.setItem('name',response['name'])
            this.http.get('http://127.0.0.1:5000/api/v1/work/work_login_capture/'+response['name']).subscribe(
              response=>{
                console.log(response)
                if(response==1){
                  this.router.navigate(['/dashboard']);
                }
              }
            )
          
            
          }
        )
  }


}
