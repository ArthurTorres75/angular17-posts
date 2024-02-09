import { Component, inject } from '@angular/core';

// SERVICES
import { PostService } from '../../services/post.service';

// NG-MODULES
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

// COMPONENTS
import { PostsComponent } from '../posts/posts.component';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CreatePostComponent } from '../create-post/create-post.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    PostsComponent,
    ModalComponent,
    CreatePostComponent,
    AlertComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  public postService = inject(PostService);
}
