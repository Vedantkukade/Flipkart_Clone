import { DialogRef } from '@angular/cdk/dialog';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/Modules/user-auth-module/Components/login/login.component';
import { CartService } from '../../Services/cart.service';
import { LogindataService } from 'src/app/Modules/user-auth-module/Services/logindata.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  matBadge=0;
  navbar="userlogout";
  username="";
  constructor(public dialog: MatDialog,private router:Router,private cartService:CartService,private logservice:LogindataService) {}

  ngOnInit():void{
    
    this.router.events.subscribe((val:any)=>{
     if(val.url){
      
     
        if(localStorage.getItem('user')){
          let userarea=localStorage.getItem('user');
          let userdata=userarea && JSON.parse(userarea);
          this.username=userdata.name;
          this.navbar="userlogin";
          console.log("inside user area")
        }else{
          console.log("Outside user area")
          this.navbar="userlogout"
        }
      }
     
    })

    let Badge=localStorage.getItem('localUser');
    if(Badge){
      this.matBadge=JSON.parse(Badge).length;
    }

    this.cartService.incMatBadge.subscribe(res=>{
      this.matBadge=res.length;
    })

    let user=localStorage.getItem('user');

    if(user){
      let userDataId=JSON.parse(user).id;
      this.cartService.getUserCart(userDataId).subscribe(res=>{

        if(res && res.body){
    
          this.cartService.incMatBadge.emit(res.body);
        }
    
        });
    }
    
  }


  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['']);
    this.matBadge=0;

  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent,{
     
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  search(value:any){
   
    this.router.navigate([`/search/${value}`]);
    console.log(value);
    
  }

  

 
}
