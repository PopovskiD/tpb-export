import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as L from 'leaflet';

interface StoreLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: 'warehouse' | 'office' | 'partner';
  phone?: string;
  email?: string;
}

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements AfterViewInit, OnDestroy {
  private map!: L.Map;
  private markers: L.Marker[] = [];
  selectedLocation: StoreLocation | null = null;
  locationTypes: Array<'partner'> = ['partner'];

  constructor(private translate: TranslateService) {}

  // Partner store locations in Macedonia
  storeLocations: StoreLocation[] = [
    // VERO MARKETS - Skopje
    {
      id: 2,
      name: 'Vero Market - Diamond Mall',
      address: 'Aerodrom',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 41.990187457593684,
      lng: 21.43041766617964,
      type: 'partner'
    },
    {
      id: 2,
      name: 'Vero Market - Aerodrom',
      address: 'Aerodrom',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 41.984879445968105,
      lng: 21.46903396247574,
      type: 'partner'
    },
    {
      id: 3,
      name: 'Vero Market - Kisela Voda',
      address: 'Boris Trajkovski 13',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 41.98252228276498,
      lng: 21.440673635491572,
      type: 'partner'
    },
    {
      id: 4,
      name: 'Vero Center',
      address: 'XCVR+5JX',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 41.993173498021925,
      lng: 21.442193683375518,
      type: 'partner'
    },
    {
      id: 5,
      name: 'Vero Market - Karposh 4',
      address: 'Karpoš',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 42.00697773219559,
      lng: 21.39356432385239,
      type: 'partner'
    },
    {
      id: 6,
      name: 'Vero Market - Taftalidje',
      address: 'Taftalidje',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 41.9971496463323,
      lng: 21.40553939686764,
      type: 'partner'
    },
    {
      id: 7,
      name: 'Vero Market - Čair',
      address: 'Čair',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 42.014407954308666,
      lng: 21.44565848152455,
      type: 'partner'
    },
    {
      id: 8,
      name: 'Vero Market - GTC',
      address: 'Centar',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 41.99480085606406,
      lng: 21.434519918296413,
      type: 'partner'
    },

    // DIEM GP MARKETS
    {
      id: 10,
      name: 'Diem GP - Gevgelija',
      address: 'Leninova',
      city: 'Gevgelija',
      country: 'North Macedonia',
      lat: 42.0049152005826,
      lng: 21.42596575083643,
      type: 'partner'
    },
    // LA NOI - Skopje
    {
      id: 13,
      name: 'La Noi',
      address: 'Orce Nikolov 204',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 42.00552755713388,
      lng: 21.410127519475058,
      type: 'partner'
    },

    // VASH MARKET - Skopje
    {
      id: 14,
      name: 'Vash Market',
      address: 'Skopje',
      city: 'Skopje',
      country: 'North Macedonia',
      lat: 42.001477,
      lng: 21.318199,
      type: 'partner'
    },

    // FUTURA MARKETS - Bitola
    {
      id: 15,
      name: 'Futura Market - Centar',
      address: 'Centar',
      city: 'Bitola',
      country: 'North Macedonia',
      lat: 41.03220848281758,
      lng: 21.324683164165442,
      type: 'partner'
    },
    {
      id: 16,
      name: 'Futura Market',
      address: 'Bair',
      city: 'Bitola',
      country: 'North Macedonia',
      lat: 41.016051984586376,
      lng: 21.345275458959968,
      type: 'partner'
    },
    // DU-BO DD MARKETS - Kumanovo
    {
      id: 18,
      name: 'Du-bo DD',
      address: 'III-ta Makedonska Udarna Brigada 174, Kumanovo',
      city: 'Kumanovo',
      country: 'North Macedonia',
      lat: 42.126204100987835,
      lng: 21.730402348989557,
      type: 'partner'
    },
    {
      id: 19,
      name: 'Du-bo DD',
      address: 'Ivo Lola Ribar, Kumanovo 1300',
      city: 'Kumanovo',
      country: 'North Macedonia',
      lat: 42.135952455620206,
      lng: 21.726375266185666,
      type: 'partner'
    }
  ];

  private customIcon(type: 'warehouse' | 'office' | 'partner'): L.DivIcon {
    const colors = {
      warehouse: '#d69e2e',
      office: '#1a365d',
      partner: '#4299e1'
    };

    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="marker-pin" style="background-color: ${colors[type]}">
          <span class="marker-icon">${this.getMarkerIcon(type)}</span>
        </div>
      `,
      iconSize: [40, 50],
      iconAnchor: [20, 50],
      popupAnchor: [0, -50]
    });
  }

  private getMarkerIcon(type: string): string {
    switch (type) {
      case 'warehouse':
        return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>';
      case 'office':
        return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="6" x2="9" y2="6.01"></line><line x1="15" y1="6" x2="15" y2="6.01"></line><line x1="9" y1="10" x2="9" y2="10.01"></line><line x1="15" y1="10" x2="15" y2="10.01"></line><line x1="9" y1="14" x2="9" y2="14.01"></line><line x1="15" y1="14" x2="15" y2="14.01"></line><line x1="9" y1="18" x2="15" y2="18"></line></svg>';
      case 'partner':
        return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>';
      default:
        return '';
    }
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  private initMap(): void {
    // Initialize map centered on North Macedonia
    this.map = L.map('locations-map', {
      center: [41.6, 21.7],
      zoom: 8,
      minZoom: 6,
      maxZoom: 18,
      scrollWheelZoom: true
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Add markers for each location
    this.storeLocations.forEach(location => {
      const marker = L.marker([location.lat, location.lng], {
        icon: this.customIcon(location.type)
      });

      marker.bindPopup(this.createPopupContent(location));

      marker.on('click', () => {
        this.selectedLocation = location;
      });

      marker.addTo(this.map);
      this.markers.push(marker);
    });
  }

  private createPopupContent(location: StoreLocation): string {
    return `
      <div class="map-popup">
        <h4>${location.name}</h4>
        <p class="popup-address">${location.address}<br>${location.city}, ${location.country}</p>
        ${location.phone ? `<p class="popup-phone">Tel: ${location.phone}</p>` : ''}
        ${location.email ? `<p class="popup-email">Email: ${location.email}</p>` : ''}
      </div>
    `;
  }

  selectLocation(location: StoreLocation): void {
    this.selectedLocation = location;
    this.map.flyTo([location.lat, location.lng], 10, {
      duration: 1.5
    });

    // Find and open the popup for this location
    const marker = this.markers.find((m, index) =>
      this.storeLocations[index].id === location.id
    );
    if (marker) {
      marker.openPopup();
    }
  }

  getLocationsByType(type: 'warehouse' | 'office' | 'partner'): StoreLocation[] {
    return this.storeLocations.filter(loc => loc.type === type);
  }

  getTypeLabel(type: string): string {
    const keys: { [key: string]: string } = {
      partner: 'LOCATIONS.PARTNER_STORES',
      warehouse: 'LOCATIONS.WAREHOUSES',
      office: 'LOCATIONS.OFFICES'
    };
    return this.translate.instant(keys[type] || type);
  }

  getTypeColor(type: string): string {
    const colors: { [key: string]: string } = {
      warehouse: '#d69e2e',
      office: '#1a365d',
      partner: '#4299e1'
    };
    return colors[type] || '#666';
  }
}
