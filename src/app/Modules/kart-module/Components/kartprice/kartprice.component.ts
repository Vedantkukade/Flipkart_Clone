import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Modules/home-module/Services/cart.service';

@Component({
  selector: 'app-kartprice',
  templateUrl: './kartprice.component.html',
  styleUrls: ['./kartprice.component.css']
})
export class KartpriceComponent implements OnInit {
  itemlength = 0;
  constructor(private cartService: CartService) {

  }

  length = "default";
  cartitems: any[] = [];
  ngOnInit(): void {

    let localitems = localStorage.getItem('localUser');

    if (localitems) {
      this.cartitems = this.cartService.returnData();
      if (localitems.length > 0) {
        this.length = 'local'

      }



    }
    let user = localStorage.getItem('user')
    
    if (user) {

      this.cartService.userCart().subscribe(res => {

        if (res) {

          this.cartitems = res

        }

        if(res.length>0){
          this.length='user'
        }
      })

     


    }








  }


  remove(data: any) {

    if (localStorage.getItem('localUser')) {
      this.cartService.removeCartItem(data);
    }

    this.cartitems = this.cartService.returnData();
    if (this.cartitems.length === 0) {
      localStorage.removeItem('localUser');
    }



  }

  removeuser(id: any) {

    let user = localStorage.getItem('user')
    let userDataId = user && JSON.parse(user).id
    this.cartService.removeUserCart(id).subscribe(res => {
      if (res) {
        this.cartService.getUserCart(userDataId).subscribe(res => {
          if (res && res.body) {
            this.cartService.incMatBadge.emit(res.body)
          }
        })
      }
      this.cartService.userCart().subscribe(res => {

        if (res) {

          this.cartitems = res
        }

      })
    })
  }

  counter: number = 1
  increment() {

    // if(data>0){
    //   data=1+(+data)
    // }

    // console.log(data);

    this.counter += 1;
  }

  decrement() {

    // if(data>0){
    //   data=(data)-1
    // }else{
    //   data=1
    // }

    // console.log(data)

    if (this.counter > 1) {
      this.counter -= 1;
    }
  }



}
