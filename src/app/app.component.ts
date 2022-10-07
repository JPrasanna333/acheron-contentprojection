import { Component } from '@angular/core';
import { IUser } from './user.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Content Projection Demo';
  rememberMe : boolean = false; 

  login(user:IUser):void{
      console.log('login',user, this.rememberMe);
  }

  signUp(user:IUser):void{
    console.log('sign up', user);
  }

  rememberUser(value:boolean){
    this.rememberMe = value; 
  }
}
