import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { IUser } from '../user.entity';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit,AfterViewInit,AfterContentInit {

  @Output() submitEvent : EventEmitter<IUser> = new EventEmitter<IUser>();
  isMessageDisplayed = false; 
  @ContentChild(AuthRememberComponent) remember? : AuthRememberComponent;
  @ViewChild(AuthMessageComponent,{static:false}) message? : AuthMessageComponent; 
  constructor(private cd : ChangeDetectorRef) { }

  ngOnInit(): void {
  
  }

  onSubmit(value : IUser){
      this.submitEvent.emit(value);
  }

  ngAfterContentInit(): void {
  //  console.log(this.remember);
    if(this.remember != undefined){
      this.remember.checked.subscribe(data =>{
        this.isMessageDisplayed = data; 
      })
    }
  }

  ngAfterViewInit(): void {
    console.log(this.message);
    if(this.message != undefined){
      this.message.days = 50; 
      this.cd.detectChanges();
    }
  }


}
