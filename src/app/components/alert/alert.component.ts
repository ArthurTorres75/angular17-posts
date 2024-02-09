import { Component, Input } from '@angular/core';

// NG-ZORRO
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NzNotificationModule, NzButtonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) body!: string;

  createBasicNotification(): void {
    this.notification.blank(
      `Título: ${this.title}`,
      `Comentario: ${this.body}`,
      {
        nzDuration: 5000,
        nzStyle: { width: '800px' },
      }
    );
  }

  constructor(private notification: NzNotificationService) {}
}
