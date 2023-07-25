import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exhibitor-list',
  templateUrl: './exhibitor-list.html',
  styleUrls: ['./exhibitor-list.scss'],
})
export class ExhibitorListPage {
  membershipTypes = [
    {
      value: 'namibian',
      title: 'Namibian Companies & Other Chamber Members',
      boothPrice: 'N$ 18,425 (per 9m2 booth)',
      clicked: false,
    },
    {
      value: 'chamber',
      title: 'Chamber Member Class A, B & C',
      boothPrice: 'N$ 19,250 (per 9m2 booth)',
    },
    {
      value: 'sadc',
      title: 'SADC Member States',
      boothPrice: 'N$ 33,000 (per 9m2 booth)',
    },
    {
      value: 'oil_gas',
      title: 'Oil & Gas Companies',
      boothPrice: 'N$ 38,000 (US$ 2,000 per 9m2 booth)',
    },
    {
      value: 'international',
      title: 'International Companies',
      boothPrice: 'N$ 55,000 (US$ 3,000 per 9m2 booth)',
    },
  ];

  constructor(private router: Router) {}

  // Handle registration button click event
  register(category: any) {
     { // Redirect to an external URL
      window.location.href = 'https://miningexponamibia.com/registration/';
      // Implement your registration logic here, e.g., navigate to a registration page
     console.log(`Register for category: ${category}`);
     category.clicked = !category.clicked;
    }        
  }  
}

