import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-retail',
    imports: [TranslateModule],
    templateUrl: './retail.component.html',
    styleUrls: ['./retail.component.scss']
})
export class RetailComponent {
  offerings = [
    {
      icon: 'shopping-bag',
      titleKey: 'RETAIL.PRODUCT_RANGE',
      descriptionKey: 'RETAIL.PRODUCT_RANGE_TEXT'
    },
    {
      icon: 'tag',
      titleKey: 'RETAIL.PRICING',
      descriptionKey: 'RETAIL.PRICING_TEXT'
    },
    {
      icon: 'headphones',
      titleKey: 'RETAIL.SUPPORT',
      descriptionKey: 'RETAIL.SUPPORT_TEXT'
    },
    {
      icon: 'zap',
      titleKey: 'RETAIL.REPLENISHMENT',
      descriptionKey: 'RETAIL.REPLENISHMENT_TEXT'
    }
  ];

  getIconSvg(icon: string): string {
    const icons: { [key: string]: string } = {
      'shopping-bag': `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
      tag: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
      headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`,
      zap: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
    };
    return icons[icon] || '';
  }
}
