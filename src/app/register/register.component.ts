import { Component } from '@angular/core';
import { CognitoService, IUser } from '../cognito.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isConfirm: boolean;
  isNotRegistered:boolean;
  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService){
    this.isConfirm = false;
    this.isNotRegistered = true;
    this.user = {} as IUser;
  }
  public signUp(): void{
    this,this.cognitoService.signup(this.user).then(() => {
      this.isConfirm = true;
      this.isNotRegistered=false;
      
    }).catch(() => {
      console.log("something went wrong with signup")
    })
  }

  public confirmSignUp(): void{
    this,this.cognitoService.confirmSignUp(this.user).then(() => {
      this.router.navigate(['/login'])
    }).catch(() => {
      console.log("something went wrong with signup")
    })
  }

}
