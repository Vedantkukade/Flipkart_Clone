import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit{

  length="default";

  ngOnInit(): void {
    let localitems=localStorage.getItem('localUser');
    if(localitems){
      
      if(localitems.length>0){
        this.length='local'
      }

     
    }
    let user=localStorage.getItem('user')
    if(user){
      this.length='user'
    }
}



}
