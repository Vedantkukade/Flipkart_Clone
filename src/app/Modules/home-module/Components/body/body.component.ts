import { Component, OnInit, } from '@angular/core';
import { Service1Service } from '../../Services/service1.service';
import { CartService } from '../../Services/cart.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private flipkartservice: Service1Service,private cartService:CartService) {

  }
  ngOnInit(): void {
    this.Products();
   
  }


  Array: any[] = [];
  Electronics:any[]=[];
  Electronics2:any[]=[];
  Campus:any[]=[];
  campus2:any[]=[];
  Beauty:any[]=[];
  beauty2:any[]=[];
  Products() {
    this.flipkartservice.GetProducts().subscribe(res => {
      this.Array = res;
      console.log(this.Array)
      this.Electronics=[res[13],res[12],res[11],res[13]];
      this.Electronics2=[res[10],res[9],res[8],];
      this.Campus=[res[4],res[6],res[3],res[2]];
      this.campus2=[res[11],res[12],res[7]]
      this.Beauty=[res[18],res[19],res[17],res[16]];
      this.beauty2=[res[14],res[15],res[5],res[7]];
    })
  }


AddToCart(data:any){
 
  if(!localStorage.getItem('user')){
    alert("Item Added to Cart");
    
    this.cartService.AnyAddToCart(data);
    
  }else{
    console.log("userlogged in");
    let userCart=localStorage.getItem('user');
    let userDataId=userCart && JSON.parse(userCart).id;

    let userCartData:any={
      ...data,
      productId:data.id,
      userDataId
    }
    delete userCartData.id;

    this.cartService.addToUserCart(userCartData).subscribe(res=>{
      if(res){

        alert("Item Added to Your Cart");
        this.cartService.getUserCart(userDataId).subscribe(res=>{
          
          if(res && res.body){
      
            this.cartService.incMatBadge.emit(res.body);
          }
      
          });
      }
    })
   
  }
  
  
}
  




}
