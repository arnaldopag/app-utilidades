import { Component, computed, signal } from '@angular/core';
import { MaterialModule } from '../material.modules';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, SideBarComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = signal(false);
  sideWidth = computed(() => (this.collapsed() ? '65px' : '250px'));
}
