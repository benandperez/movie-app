import { Component, EventEmitter, Input, Output } from '@angular/core';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-paginator-prime',
  templateUrl: './paginator-prime.component.html',
  styleUrls: ['./paginator-prime.component.css']
})
export class PaginatorPrimeComponent {

  @Input() first: number = 0; // los primeros de 0 a 20
  @Input() rows: number = 10;
  @Input() totalRecords: number = 10;
  @Output() paginatorChangePage = new EventEmitter<any>();

  onPageChange(event:  PageEvent | any ) {
    this.paginatorChangePage.emit(event)
  }

}
