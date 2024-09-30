import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { issuebookComponent } from './issuebook/issuebook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { RecordsComponent } from './records/records.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklistComponent } from './booklist/booklist.component';


const routes: Routes = [
  { path: '', component: issuebookComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'updatebook/:id', component: UpdatebookComponent },
  {path: 'addbook', component: AddbookComponent},
  {path: 'booklist', component: BooklistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
