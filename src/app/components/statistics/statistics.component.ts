import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Statistic {
  icon: string;
  value: number;
  suffix: string;
  labelKey: string;
  currentValue: number;
  label: string;
}

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit {
  @ViewChildren('statItem') statItems!: QueryList<ElementRef>;

  statistics: Statistic[] = [
    { icon: 'calendar', value: 15, suffix: '+', labelKey: 'STATS.YEARS', currentValue: 0, label: "Calendar" },
    { icon: 'users', value: 100, suffix: '+', labelKey: 'STATS.EMPLOYEES', currentValue: 0, label: "Users" },
    { icon: 'handshake', value: 50, suffix: '+', labelKey: 'STATS.PARTNERS', currentValue: 0, label: "Handshake" },
    { icon: 'globe', value: 20, suffix: '+', labelKey: 'STATS.COUNTRIES', currentValue: 0, label: "Globe" },
    { icon: 'warehouse', value: 3, suffix: '', labelKey: 'STATS.WAREHOUSES', currentValue: 0, label: "Warehouse" }
  ];

  private hasAnimated = false;
  private observer: IntersectionObserver | null = null;

  ngOnInit() {}

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
        }
      });
    }, options);

    const section = document.querySelector('.statistics');
    if (section) {
      this.observer.observe(section);
    }
  }

  private animateCounters() {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    this.statistics.forEach((stat) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        stat.currentValue = Math.min(Math.round(increment * currentStep), stat.value);

        if (currentStep >= steps) {
          stat.currentValue = stat.value;
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }

  getIconSvg(icon: string): string {
    const icons: { [key: string]: string } = {
      calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
      users: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      handshake: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>`,
      globe: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      warehouse: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
    };
    return icons[icon] || '';
  }
}
