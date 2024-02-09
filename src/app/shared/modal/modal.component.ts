import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Component, Input, inject } from '@angular/core';

// NG-ZORRO
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NzModalModule, CommonModule, NzButtonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  isVisible = false;
  isConfirmLoading = false;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) onSubmitFunction!: (
    form: FormGroup | null
  ) => boolean;
  @Input({ required: true }) onCancelFunction!: (
    form: FormGroup | null
  ) => void;
  @Input() form: FormGroup | null = null;
  public postService = inject(PostService);

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    const result = this.onSubmitFunction(this.form);
    if (!result) {
      this.isConfirmLoading = false;
      return;
    }

    this.isVisible = false;
    this.isConfirmLoading = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.onCancelFunction(this.form);
  }
}
