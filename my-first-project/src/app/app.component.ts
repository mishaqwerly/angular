import { Component, OnInit } from '@angular/core';
import {LocalCounterService} from './services/local-counter.service'
import {GlobalCountService} from './services/global-count.service'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes

} from '@angular/animations';


export interface PostFromServer {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocalCounterService],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1,
        width: '100%',
        height: '100%'
      })),
      state('hide',   style({
        opacity: 0,
        width: 0,
        height: 0
      })),
      transition('show <=> hide', animate('300ms ease-out')),
    ])
  ]
})
export class AppComponent implements OnInit {

  sizeClass = false

  dataPostObj: PostFromServer[] = [
    {id: 1, title: 'title 1', text: 'lorem DnB music 1'},
    {id: 2, title: 'title 2', text: 'lorem DnB music 2'}
  ];

  constructor(
    private localVal: LocalCounterService,
    private GlobalVal: GlobalCountService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.toggleBlock(1)
    },300)
  }


  addPost(data: PostFromServer) {
    this.dataPostObj.push(data);
  }

  deletePost(id: number) {
    this.dataPostObj = this.dataPostObj.filter( (one_post) => one_post.id !== id)
  }

  myPromise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve ('Promise Resolve')
    }, 3000)
  })

  show = false;

  blockName = 1

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggleBlock(showSection) {

    this.blockName = showSection
    this.show = 'show'
    if (showSection !== 1) {
      this.sizeClass = true
    } else {
      this.sizeClass = false
    }
  }




}
