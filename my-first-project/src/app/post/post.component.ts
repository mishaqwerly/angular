import {Component, ContentChild, ElementRef, Input, OnInit, Output, EventEmitter, OnDestroy, ViewEncapsulation} from '@angular/core';
import { PostFromServer } from  '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnDestroy {

  @Input() onePost: PostFromServer;

  @ContentChild('info', {static: true}) infoRef: ElementRef
  @Output() onRemove = new EventEmitter<number>()

  constructor() {}

  ngOnInit() {

  }
  removePost() {
    this.onRemove.emit(this.onePost.id)
  }

  ngOnDestroy() {
    console.log("Desrtoi is work -- post")
  }

}
