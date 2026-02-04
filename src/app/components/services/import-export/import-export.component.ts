import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-import-export',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})
export class ImportExportComponent {
  services = [
    {
      icon: 'globe',
      titleKey: 'IMPORT_EXPORT.GLOBAL_SOURCING',
      descriptionKey: 'IMPORT_EXPORT.GLOBAL_SOURCING_TEXT'
    },
    {
      icon: 'file-text',
      titleKey: 'IMPORT_EXPORT.DOCUMENTATION',
      descriptionKey: 'IMPORT_EXPORT.DOCUMENTATION_TEXT'
    },
    {
      icon: 'anchor',
      titleKey: 'IMPORT_EXPORT.CUSTOMS',
      descriptionKey: 'IMPORT_EXPORT.CUSTOMS_TEXT'
    },
    {
      icon: 'shield',
      titleKey: 'IMPORT_EXPORT.QUALITY',
      descriptionKey: 'IMPORT_EXPORT.QUALITY_TEXT'
    }
  ];

  getIconSvg(icon: string): string {
    const icons: { [key: string]: string } = {
      globe: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
      'file-text': `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      anchor: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>`,
      shield: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    };
    return icons[icon] || '';
  }
}
