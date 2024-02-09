// BASIC
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// MODULES
import { CommonModule } from '@angular/common';

// COMPONENTS
import { LayoutComponent } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
