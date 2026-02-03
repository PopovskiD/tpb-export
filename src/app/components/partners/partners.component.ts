import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {
  partners = [
    { name: 'Partner Brand 1', logo: 'PB1' },
    { name: 'Partner Brand 2', logo: 'PB2' },
    { name: 'Partner Brand 3', logo: 'PB3' },
    { name: 'Partner Brand 4', logo: 'PB4' },
    { name: 'Partner Brand 5', logo: 'PB5' },
    { name: 'Partner Brand 6', logo: 'PB6' },
    { name: 'Partner Brand 7', logo: 'PB7' },
    { name: 'Partner Brand 8', logo: 'PB8' }
  ];
}
