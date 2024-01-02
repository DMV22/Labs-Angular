import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['../app.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() myPost!: Post;
  @Output() onRemove = new EventEmitter<number>();
  constructor() {}
  removePost() {
    if (this.myPost.id !== undefined) {
      this.onRemove.emit(this.myPost.id as number);
    }
  }
  ngOnInit(): void {}
  ngOnDestroy() {
    console.log('метод ngOnDestroy');
  }
}
