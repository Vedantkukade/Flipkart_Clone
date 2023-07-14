import { Component } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { LogindataService } from '../../Services/logindata.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/Modules/home-module/Services/cart.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private loginservice:LogindataService,private router:Router,private dialog:MatDialog,private cartService:CartService){

}

  hide = true;

  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)])
})
  

userlogin(){
this.loginservice.getUserData(this.loginform.value);



}






closedialog(){
  const timeout=50;
  setTimeout(()=>{
    this.dialog.closeAll();
  },timeout)

}

}
