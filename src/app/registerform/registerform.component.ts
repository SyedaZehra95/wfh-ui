import { Component, OnInit } from '@angular/core';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators} from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  regPopup: boolean = false;
  display: boolean = false;
  public detailsForm:FormGroup;
  public account_created=false;
  public register_link:any;
  public router:Router;

  constructor(private formBuilder: FormBuilder, private http:HttpClient,public sanitizer: DomSanitizer,router:Router) {
    this.router=router;
    this.detailsForm = this.formBuilder.group({
      'email':['',Validators.required],
      'username':['',Validators.required],
      'password': ['',Validators.required],
      'cpassword': ['',Validators.required],
  });      

   }
  ngOnInit() {
  }

  registerButtonClicked(){
    console.log(this.detailsForm.value)
    this.http.post('http://127.0.0.1:5000/api/v1/work/work_register',this.detailsForm.value).subscribe(
          response=>{
            console.log(response)
            this.account_created=true;
            this.register_link=this.sanitizer.bypassSecurityTrustResourceUrl('http://127.0.0.1:5000/api/v1/work/work_register_capture/'+this.detailsForm.value.username);
            console.log(this.register_link)
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 15000);
            
          }
        )

  }
 /* closePop(){
    var reg = document.getElementById('registerPop');
    reg.classList.remove('in');
  }*/


}
