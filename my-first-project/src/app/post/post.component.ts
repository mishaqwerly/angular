import {Component, Input, OnInit} from '@angular/core';
import { PostFromServer } from  '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() onePost: PostFromServer;
  constructor() {}

  ngOnInit() {
  }

}
