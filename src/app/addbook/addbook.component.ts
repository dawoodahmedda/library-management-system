import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { addbookmodel } from '../addbookmodel';



@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  public book:addbookmodel = {} as addbookmodel;

  constructor(private api:ApiiService,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }

  apply(){
    this.api.addbook(this.book).subscribe((res=>{
      this.toastr.success("Book Added sucessfully!!!");
       this.route.navigate(['booklist'])
    }))
    
  }
}

