import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  incMatBadge=new EventEmitter<any | []>();
  constructor(private http:HttpClient) { }

  data:any[]=[]

  AnyAddToCart(data:any){

    let cartArray=[];
    let localUser=localStorage.getItem('localUser');

    if(!localUser){
      localStorage.setItem('localUser',JSON.stringify([data]));
      this.incMatBadge.emit([data]);
    }
    else{
     
      cartArray=JSON.parse(localUser);
      cartArray.push(data);
 
      localStorage.setItem('localUser',JSON.stringify(cartArray));
     
    }

    // this.data=cartArray;
    
    this.incMatBadge.emit(cartArray);
  }

  returnData(){
  
    let cartstore=localStorage.getItem('localUser')
    let cartdata=cartstore && JSON.parse(cartstore)

    return cartdata
 
  }

  removeCartItem(ItemId:any){

    let Data=localStorage.getItem('localUser')

    if(Data){

      let item:any[] = JSON.parse(Data);

      item=item.filter((item:any)=>ItemId!==item.id);

      if(ItemId.length==0){
        localStorage.removeItem('localUser')
      }
  
      localStorage.setItem('localUser',JSON.stringify(item));
      this.incMatBadge.emit(item);
    }

  
  }

  addToUserCart(cartData:any):Observable<any>{

    return this.http.post<any>("http://localhost:3000/userCartItems",cartData);
  }

  getUserCart(userId:any){

    return this.http.get<any[]>("http://localhost:3000/userCartItems?userDataId="+userId,{observe:'response'})
  }
  
  removeUserCart(data:any){

    return this.http.delete("http://localhost:3000/userCartItems/"+data)
  }

  userCart(){
    let user=localStorage.getItem('user');
    let userId=user && JSON.parse(user);

    return this.http.get<any[]>("http://localhost:3000/userCartItems?userDataId="+userId.id);
  }
  
}
