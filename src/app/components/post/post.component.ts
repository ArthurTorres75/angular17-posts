import { Component, Input } from '@angular/core';
import { formatDistance } from 'date-fns';

// NG-ZORRO
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

// INTERFACES
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NzCommentModule, NzIconModule, NzAvatarModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input({ required: true }) info!: Post;

  likes = 0;
  dislikes = 0;

  time(date: Date) {
    return formatDistance(date, new Date());
  }

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
}
