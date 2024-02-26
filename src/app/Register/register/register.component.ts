import { Component } from '@angular/core';
import { userdetails } from '../../../Model/userdetails';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CognitoService,IUser } from '../../cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  isConfirm: boolean;
  userI:IUser;

  constructor(private http:HttpClient,private router:Router,private cognitoService:CognitoService){
    this.isConfirm=false
    this.userI={} as IUser
  }
   user: userdetails = {
    role: '',
    name: '',
    emailid:''

}

public signUp(): void{  
  this.cognitoService.signup(this.userI).then(() => {
    this.isConfirm = true;
    
  }).catch(() => {
    console.log("something went wrong with signup")
  })
}

public confirmSignUp(): void{
  this.cognitoService.confirmSignUp(this.userI).then(() => {
    this.router.navigate(['/login'])
  }).catch(() => {
    console.log("something went wrong with signup")
  })
}
onsubmitdata(uname:string,role:string){
  this.user={
    // userId:userId,
    emailid:this.userI.email,
    name:uname,
    role:role
  }
  console.log(this.user)
  this.http.post("http://localhost:8091/credentials/savecredentials",this.user).subscribe((res)=>{
      console.log(res);
      
    },(error)=>{
      console.log(error);
      
    })
}

}
