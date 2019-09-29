import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { getViewData } from '@angular/core/src/render3/state';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  public router:Router;
  public attention=0;
  public left=0;
  public right=0;
  public login=0;
  public tot_time=0;
  public stream_link;
  public old=0;
  public name='';

  //openPopup: boolean = false;

    display = 'none';
    overlay = 'none';

  constructor(private http:HttpClient,router:Router,public sanitizer: DomSanitizer) { 
    this.router=router;
    
  }

  ngOnInit() { 
      this.getData(); 
      if(localStorage.getItem('name')){
        this.name='Welcome Back! '+localStorage.getItem('name')
      }

    setInterval(()=>{
        this.http.get('http://127.0.0.1:5000/api/v1/work/work_data/'+localStorage.getItem('id')).subscribe(
        response=>{
          console.log(response)
          this.attention=response['attention'];
          this.left=response['left'];
          this.right=response['right'];
          this.login=response['login'];
          this.tot_time=response['time'];
          if(this.old!=this.login){
              this.router.navigate(['/'])
          }

          
        }
  )

    },50000)
    this.stream_link=this.sanitizer.bypassSecurityTrustResourceUrl('http://127.0.0.1:5000/api/v1/work/work_track_stream/'+localStorage.getItem('name')+'/'+localStorage.getItem('id')+'/0');
    /*this.http.get('http://127.0.0.1:5000/api/v1/work/work_track_stream/'+localStorage.getItem('name')+'/'+localStorage.getItem('id')+'/1').subscribe(
        response=>{
          console.log(response)
          this.router.navigate(['/']);
          
        }
    )*/
  }

  public getData(){
    this.http.get('http://127.0.0.1:5000/api/v1/work/work_data/'+localStorage.getItem('id')).subscribe(
        response=>{
          console.log(response)
          this.attention=response['attention'];
          this.left=response['left'];
          this.right=response['right'];
          this.login=response['login'];
          this.tot_time=response['time'];
          this.old=this.login

          
        }
  )
  }



}
