import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username:string='';
  password:string='';
  signIn() {
    console.log("username=", this.username, "password=", this.password);
    if (this.username === 'admin' && this.password === 'root') {
      console.log('login success');
    } else {
      console.log("login failure");
    }
  }
}
