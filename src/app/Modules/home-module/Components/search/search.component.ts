import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service1Service } from '../../Services/service1.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchResult:undefined|any;

  constructor(private activatedRoute:ActivatedRoute,private service:Service1Service,private router:Router){


  }
  ngOnInit(): void {
    this.router.events.subscribe((item:any)=>{
      let param=this.activatedRoute.snapshot.paramMap.get('params')

    param && this.service.searchProducts(param).subscribe(result=>{
      this.searchResult=result
      console.log(this.searchResult)
    })
    })
   
  }




}
