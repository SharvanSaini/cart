import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppControllerService } from '../app-controller.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  rForm:FormGroup;

  constructor(private route:Router, private fb:FormBuilder, private appservice:AppControllerService) { }

  ngOnInit() {
    this.rForm=this.fb.group(
      {
        "email":[null,Validators.required],
        "pwd":[null,Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(25)])]
      }
    );
  }

  addPost(data)
  {
    console.log(data);
    let email:String;
    let password:String;
    email=data['email'];
    password=data['pwd'];
    const credentials=this.rForm.value;
    this.appservice.adminlogin(this.rForm.value).subscribe(data=>{
      console.log(data);
      if(data==true)
      {
        console.log("Welcome Login");
        this.showSuccess("login due true","Success");
        this.route.navigateByUrl('WelcomAdmin');
      }
      else{
        console.log("null"+data);
        this.showError("invalid login","error");
      }
    }
    // error{
    //   this.showError("invalid username and password","error");
    // }
    
    );
  }


  showSuccess(msg,title)
  {
    alert(msg+"Success"+title);
  }

  showError(msg,title)
  {
    alert(msg+"Error"+title);
  }

}
