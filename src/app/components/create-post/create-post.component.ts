import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// SERVICES
import { PostService } from '../../services/post.service';

// NG-ZORRO
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

// COMPONENTS
import { ModalComponent } from '../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    ModalComponent,
    NzFormModule,
    ReactiveFormsModule,
    CommonModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
  ],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  public isVisible = false;
  public isConfirmLoading = false;
  public postForm: FormGroup<{
    title: FormControl<string>;
    body: FormControl<string>;
  }>;

  public postService = inject(PostService);

  onSave(form?: FormGroup | null): boolean {
    if (!form) return false;

    if (!form.valid) return false;

    this.postService.createPost(form.value);

    form.reset();
    return true;
  }

  resetForm(form?: FormGroup | null): void {
    if (!form) return;
    form.reset();
  }
  constructor(private fb: NonNullableFormBuilder) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(15)]],
      body: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }
}
