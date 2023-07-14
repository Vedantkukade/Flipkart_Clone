import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { LogindataService } from '../../Services/logindata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private loginservice:LogindataService,private router:Router){

  }
  ngOnInit(): void {
   this.loginservice.userloginauth();
  }

  hide = true;

  loginform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
    name:new FormControl('',Validators.required)
})


postD(){
  this.loginservice.postLoginData(this.loginform.value).subscribe(res=>{
    console.log(res)
    this.loginform.reset();
    if(res){
      this.router.navigate(['usermodule/userlogin']);
    }
    
  })
}




}
