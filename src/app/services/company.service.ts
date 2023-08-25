import { Injectable } from '@angular/core';
import { Company } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companies: Company[] = [
    {
      id: 1,
      name: 'Chamber of Mines',
      logoUrl: 'assets/img/floor/CoM.jpeg'
    },
    {
      id: 2,
      name: 'Geological Survey of Namibia',
      logoUrl: 'assets/img/floor/mines.jpeg'
    },
    {
      id: 3,
      name: 'Andrada Mining',
      logoUrl: 'assets/img/floor/andrada.png'
    },
    {
      id: 4,
      name: 'Geological Survey of Finland',
      logoUrl: 'assets/img/floor/geologicalfinland.png'
    },
    {
      id: 5,
      name: 'RMB Namibia',
      logoUrl: 'assets/img/floor/rmbLogo.png'
    },
    {
      id: 6,
      name: 'Northern Graphite',
      logoUrl: 'assets/img/floor/ng-logo.png'
    },
    {
      id: 7,
      name: 'Delegation of the European Union to the Republic of Namibia',
      logoUrl: 'assets/img/floor/eu.png'
    },
    {
      id: 8,
      name: 'Deloitte Namibia',
      logoUrl: 'assets/img/floor/deloitte.png'
    },
    {
      id: 9,
      name: 'Antler Gold',
      logoUrl: 'assets/img/floor/antler.jpeg'
    },
    {
      id: 10,
      name: 'Deep Yellow',
      logoUrl: 'assets/img/floor/deepyellow.jpeg'
    },
    {
      id: 11,
      name: 'Debmarine',
      logoUrl: 'assets/img/floor/debmarine.png'
    },
    {
      id: 12,
      name: 'Rosh Pinah Zinc Mine',
      logoUrl: 'assets/logos/company-man.png'
    },
    {
      id: 13,
      name: 'Ministry of Mines and Energy',
      logoUrl: 'assets/img/floor/mines.jpeg'
    },
    {
      id: 14,
      name: 'RMB Namibia',
      logoUrl: 'assets/img/floor/rmb-promo-logo.png'
    }
  ];

  constructor() {}

  getCompanies(): Company[] {
    return this.companies;
  }

  getCompany(id: number): Company | undefined {
    return this.companies.find(company => company.id === id);
  }
}
