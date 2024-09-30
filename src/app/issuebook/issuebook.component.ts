import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { issuemodel } from '../issuemodel';
@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class issuebookComponent implements OnInit {
  public book:issuemodel = {} as issuemodel;

  constructor(private api:ApiService,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    
  }

  apply(){
    this.api.issuebook(this.book).subscribe((res=>{
      this.toastr.success("Book bought sucessfully!!!");
      this.route.navigate(['records'])
    }))
    
  }
}
