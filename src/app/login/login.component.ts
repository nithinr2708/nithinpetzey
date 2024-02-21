import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CognitoService, IUser } from '../cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: IUser;
  constructor(private router: Router, private cognitoService: CognitoService) {
    this.user = {} as IUser;
  }
  public signIn(): void {
    this.cognitoService
      .signIn(this.user)
      .then(() => {
        this.router.navigate(['/receptionist']);
      })
      .catch(() => {
        console.log('something wrong with the sign in');
      });
  }
}
