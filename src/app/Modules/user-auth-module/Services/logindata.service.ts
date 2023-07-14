import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { CartService } from '../../home-module/Services/cart.service';
@Injectable({
  providedIn: 'root'
})
export class LogindataService {

  constructor(private http:HttpClient,private router:Router,private cartService:CartService) { }


  postLoginData(data:any):Observable<any>{
   return this.http.post<any>("http://localhost:3000/posts",data)
    
  }

  getUserData(data:any){
    console.log(data);

    this.http.get(`http://localhost:3000/posts?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((res:any)=>{
    
      if(res && res.body && res.body.length){
        console.log("user logged in");
        localStorage.setItem('user',JSON.stringify(res.body[0]));
        this.addLocalUserToUser();
        this.router.navigate(['']);
       
      }else{
        alert("Email or Password Incorrect!");
      }
    })
  }

  addLocalUserToUser(){
  
    let localData=localStorage.getItem("localUser");
    let userCart=localStorage.getItem('user');
    let userDataId= userCart && JSON.parse(userCart).id
    if(localData){
      let localDataList:any[]=JSON.parse(localData);  
   
    
      localDataList.forEach((product:any,index)=>{
        let cartData:any={
          ...product,
          productId:product.id,
          userDataId
        }
  
        delete cartData.id;
  
        setTimeout(() => {
  
          this.cartService.addToUserCart(cartData).subscribe(res=>{
            if(res){
              console.log("local cart data is added to user cart");
            }
          })
  
        }, 500);
  
       
  
        if(localDataList.length===index+1){
          localStorage.removeItem('localUser');
        }
  
      })
  
    }

    setTimeout(() => {
      this.cartService.getUserCart(userDataId).subscribe(res=>{

        if(res && res.body){
    
          this.cartService.incMatBadge.emit(res.body);
        }
    
        });
    }, 2000);
    

  }

  userloginauth(){
    if(localStorage.getItem('user')){
      this.router.navigate([''])
    }
  }

}
