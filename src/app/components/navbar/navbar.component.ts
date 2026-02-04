import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentLang = 'mk';

  menuItems = [
    { label: 'NAV.ABOUT', href: '#about' },
    { label: 'NAV.DISTRIBUTION', href: '#distribution' },
    { label: 'NAV.IMPORT_EXPORT', href: '#import-export' },
    { label: 'NAV.RETAIL', href: '#retail' },
    { label: 'NAV.LOCATIONS', href: '#locations' },
    { label: 'NAV.CONTACT', href: '#contact' }
  ];

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'mk';
    this.translate.use(this.currentLang);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(event: Event, href: string) {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.closeMobileMenu();
    }
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
