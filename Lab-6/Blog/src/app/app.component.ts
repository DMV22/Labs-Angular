import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
  date?: Date | number; // Додаємо поле date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BlogComponents';
  posts: Post[] = [
    {
      title: 'Вивчаю компоненти',
      text: 'Створюю проект "Блог"',
      id: 1,
      date: Date.now(),
    },
    {
      title: 'Вивчаю директиви',
      text: 'Все ще створюю "Блог"',
      id: 2,
      date: Date.now(),
    },
  ];

  // Додаємо поле для зберігання тексту пошуку
  search: string = '';

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
  deletePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
