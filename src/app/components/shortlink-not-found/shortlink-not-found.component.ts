import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortlink-not-found',
  templateUrl: './shortlink-not-found.component.html',
  styleUrls: ['./shortlink-not-found.component.css']
})
export class ShortlinkNotFoundComponent implements OnInit {
  title: string = '';
  ngOnInit() {
    this.title = 'Shortlink no encontrado'
  }

}
