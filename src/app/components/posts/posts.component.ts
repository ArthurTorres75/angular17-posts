import { Component, inject } from '@angular/core';

// NG-ZORRO
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

// COMPONENTS
import { PostComponent } from '../post/post.component';
import { CreatePostComponent } from '../create-post/create-post.component';

// SERVICES
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent,
    NzEmptyModule,
    NzButtonModule,
    NzSkeletonModule,
    CreatePostComponent,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  public postService = inject(PostService);

  onClick(): void {
    console.log('clicked');
  }
}
