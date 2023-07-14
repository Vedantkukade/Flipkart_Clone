import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Modules/home-module/Services/cart.service';
@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {

  constructor(private cartService: CartService) {

  }
  items = 0;
  
  length = "default";
  cartData: any[] = [];
  data: any;
  priceDetails: any = {

    price: 0,
    discount: '0',
    dcharge: 'Free',
    total: 0,
    save: 0


  }

  ngOnInit(): void {

    let localitems = localStorage.getItem('localUser');
    this.data = localitems && JSON.parse(localitems);


    if (localitems) {
      this.cartData = this.cartService.returnData();
      this.items = JSON.parse(localitems).length
      this.cartService.incMatBadge.subscribe(res => {
        this.items = res.length;
        console.log(res);
        this.data = res
        let a = 0;
        this.data.forEach((item: any) => {
          console.log(item.price);
          a = a + item.price
          console.log(a);
          this.priceDetails.price = a;
          if (a < 200) {
            this.priceDetails.discount = '10%';
            this.priceDetails.dcharge = '₹40';
            this.priceDetails.save = ((a * 10) / 100);
            this.priceDetails.total = a - this.priceDetails.save + 40;
          } else {
            this.priceDetails.discount = '20%';
            this.priceDetails.dcharge = 'Free';
            this.priceDetails.save = (a * 20) / 100;
            this.priceDetails.total = a - this.priceDetails.save;
          }


        })

        if (this.items == 0) {
          this.length = 'default'
        }

      })

      if (localitems.length > 0) {
        this.length = 'local'
      }
    }

    let user = localStorage.getItem('user')
    if (user) {

      this.cartService.incMatBadge.subscribe(res => {
        this.items = res.length

        this.data = res
        let a = 0;
        this.data.forEach((item: any) => {
          console.log(item.price);
          a = a + item.price

          this.priceDetails.price = a;
          if (a < 200) {
            this.priceDetails.discount = '10%';
            this.priceDetails.dcharge = '₹40';
            this.priceDetails.save = ((a * 10) / 100);
            this.priceDetails.total = a - this.priceDetails.save + 40;
          } else {
            this.priceDetails.discount = '20%';
            this.priceDetails.dcharge = 'Free';
            this.priceDetails.save = (a * 20) / 100;
            this.priceDetails.total = a - this.priceDetails.save;
          }
          

        })

        if(res.length==0){
          this.length='default'
        }

      })

      this.cartService.userCart().subscribe(res => {
        this.cartData = res
        console.log(this.cartData)
        this.items = res.length
        let price = 0;

        this.cartData.forEach((item: any) => {
          price = price + (+item.price);
        })

        this.priceDetails.price = price;

        if (price < 200) {
          this.priceDetails.discount = '10%';
          this.priceDetails.dcharge = 'Rs.40';
          this.priceDetails.save = ((price * 10) / 100);
          this.priceDetails.total = price - this.priceDetails.save + 40;
        } else {
          this.priceDetails.discount = '20%';
          this.priceDetails.dcharge = 'Free';
          this.priceDetails.save = (price * 20) / 100;
          this.priceDetails.total = price - this.priceDetails.save;
        }

        if(this.cartData.length>0){
          this.length='user'
        }

      })
      

 

    }

    this.cartData = this.cartService.returnData();


    let price = 0;

    this.cartData.forEach((item: any) => {
      price = price + (+item.price);
    })

    this.priceDetails.price = price;

    if (price < 200) {
      this.priceDetails.discount = '10%';
      this.priceDetails.dcharge = 'Rs.40';
      this.priceDetails.save = ((price * 10) / 100);
      this.priceDetails.total = price - this.priceDetails.save + 40;
    } else {
      this.priceDetails.discount = '20%';
      this.priceDetails.dcharge = 'Free';
      this.priceDetails.save = (price * 20) / 100;
      this.priceDetails.total = price - this.priceDetails.save;
    }




  }




}
