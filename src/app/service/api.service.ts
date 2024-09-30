import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { issuemodel } from '../issuemodel';
import { addbookmodel } from '../addbookmodel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}

  // Buying book
  issuebook(data: issuemodel) {
    return this.http.post<issuemodel>('http://localhost:3000/posts', data);
  }

  // Viewing book
  records() {
    return this.http.get<issuemodel[]>('http://localhost:3000/posts');
  }

  // Delete book
  delete(id: number) {
    return this.http.delete<issuemodel>('http://localhost:3000/posts/' + id);
  }

  // Fetch data
  fetchdata(id: number) {
    return this.http.get<issuemodel>('http://localhost:3000/posts/' + id);
  }

  // Update data
  update(data: issuemodel, id: number) {
    return this.http.put<issuemodel>('http://localhost:3000/posts/' + id, data);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ApiiService {
  constructor(private http: HttpClient, private router: Router) {}

  // Add new book
  addbook(data: addbookmodel) {
    return this.http.post<addbookmodel>('http://localhost:3001/books', data);
  }

  // Books list
  booklist() {
    return this.http.get<addbookmodel[]>('http://localhost:3001/books');
  }

  // Delete book
  delete(id: number) {
    return this.http.delete<addbookmodel>('http://localhost:3001/books/' + id);
  }
}
