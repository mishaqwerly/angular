import { Component } from '@angular/core';

export interface PostFromServer {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataPostObj: PostFromServer[] = [
    {id: 1, title: 'title 1', text: 'lorem DnB music 1'},
    {id: 2, title: 'title 2', text: 'lorem DnB music 2'}
  ];

  addPost(data: PostFromServer) {
    this.dataPostObj.push(data);
  }

}
