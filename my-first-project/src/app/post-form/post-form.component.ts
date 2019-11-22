import {Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {PostFromServer} from '../app.component';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAddNewPostToServerData: EventEmitter<PostFromServer> = new EventEmitter<PostFromServer>()

  @ViewChild('focusTitle', {static: false}) myInput: ElementRef

  title = ''
  text = ''

  constructor() { }

  ngOnInit() {
  }

  addNewPost() {
    if (this.title.trim() && this.text.trim()) {
      const newPost: PostFromServer = {
        title: this.title,
        text: this.text
      }
      this.onAddNewPostToServerData.emit(newPost)
      this.title = ''
      this.text = ''
    }
  }

  focusInput() {
    this.myInput.nativeElement.focus()
  }

}
