import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  benefits = [
    {
      icon: 'briefcase',
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement.'
    },
    {
      icon: 'heart',
      title: 'Health Benefits',
      description: 'Comprehensive health insurance for you and your family.'
    },
    {
      icon: 'users',
      title: 'Team Environment',
      description: 'Collaborative culture with supportive colleagues.'
    },
    {
      icon: 'award',
      title: 'Recognition',
      description: 'Performance-based rewards and recognition programs.'
    }
  ];

  openPositions = [
    { title: 'Sales Manager', location: 'Headquarters', type: 'Full-time' },
    { title: 'Logistics Coordinator', location: 'Warehouse', type: 'Full-time' },
    { title: 'Marketing Specialist', location: 'Headquarters', type: 'Full-time' }
  ];

  getIconSvg(icon: string): string {
    const icons: { [key: string]: string } = {
      briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      heart: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
      users: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      award: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
    };
    return icons[icon] || '';
  }
}
