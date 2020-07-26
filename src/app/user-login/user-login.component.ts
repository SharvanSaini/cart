import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AppControllerService } from '../app-controller.service';
import { error } from 'util';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

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
    let pwd:String;
    email=data['email'];
    pwd=data['pwd'];
    const credentials=this.rForm.value;
    this.appservice.chelogin(this.rForm.value).subscribe(data=>{
      console.log(data);
      if(data==true)
      {
        console.log("Welcome Login");
        this.showSuccess("login due true","Success");
        this.route.navigateByUrl('WelcomeLogin');
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
