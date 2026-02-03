import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { DistributionComponent } from './components/services/distribution/distribution.component';
import { ImportExportComponent } from './components/services/import-export/import-export.component';
import { RetailComponent } from './components/services/retail/retail.component';
import { PartnersComponent } from './components/partners/partners.component';
import { LocationsComponent } from './components/locations/locations.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    DistributionComponent,
    ImportExportComponent,
    RetailComponent,
    PartnersComponent,
    LocationsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TPB Export';
}
