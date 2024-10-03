import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, ApiiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';
import { issuemodel } from '../issuemodel';
import { addbookmodel } from '../addbookmodel'; // Ensure to import your book model

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class issuebookComponent implements OnInit {
  public book: issuemodel = {} as issuemodel;
  public books: addbookmodel[] = []; // Array to hold the list of books

  constructor(private api: ApiService, private apii: ApiiService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchBooks(); // Fetch the list of books when the component initializes
  }

  fetchBooks() {
    this.apii.booklist().subscribe(
      (res: addbookmodel[]) => {
        this.books = res; // Assign the fetched books to the books property
      },
      (err: any) => { // Explicitly define the type for err
        this.toastr.error("Error fetching book list!");
      }
    );
  }

  apply() {
    this.api.issuebook(this.book).subscribe(
      (res) => {
        this.toastr.success("Book issued successfully!!!");
        this.route.navigate(['records']);
      },
      (err: any) => { // Explicitly define the type for err
        this.toastr.error("Error issuing book!");
      }
    );
  }
}
