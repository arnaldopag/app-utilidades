import { Component, Input, computed, signal } from '@angular/core';
import { MaterialModule } from '../material.modules';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type menuItems = {
  title: string;
  icon: string;
  route?: string;
};

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MaterialModule,CommonModule,RouterLinkActive,RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  sideNavCollapsed = signal(false);

  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }

  menuItems: menuItems[] = [
    { title: 'Home', icon: 'home', route: 'home' },
    { title: 'Dashborad', icon: 'dashboard', route: 'dashboard' },
    { title: 'Bets', icon: 'stars', route: 'bets' },
    { title: 'Leagues', icon: 'group_work', route: 'leagues' },
    { title: 'Teams', icon: 'people', route: 'teams' },
    { title: 'Players', icon: 'person', route: 'players' },
  ];

  profilePicSize = computed(() => (this.sideNavCollapsed() ? '50' : '130'));

  constructor() {}
}
