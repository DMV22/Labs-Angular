import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['../app.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  title = '';
  text = '';
  constructor() {}

  myDate$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  date1!: Date;
  ngOnInit(): void {
    this.myDate$.subscribe((date) => {
      this.date1 = date;
    });
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        id: Math.random(),
        title: this.title,
        text: this.text,
        date: this.date1,
      };
      this.onAdd.emit(post);
      console.log('New post', post);
      this.title = this.text = '';
    }
  }
}
