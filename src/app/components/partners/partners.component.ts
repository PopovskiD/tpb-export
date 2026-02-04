import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners = [
    { name: 'Vero', logo: 'vero' },
    { name: 'elida', logo: 'elida' },
    { name: 'La Noi', logo: 'lanoi' },
    { name: 'Diem', logo: 'diem' },
    { name: 'GoldCoast Cocoa', logo: 'cocoa' },
    { name: 'Futura', logo: 'futura' },
    { name: 'dubo', logo: 'dubo' },
    { name: 'vash', logo: 'vash' }
  ];
}
