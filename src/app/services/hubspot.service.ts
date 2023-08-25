import { Injectable } from '@angular/core';
import { HubspotFormData } from '../types';

@Injectable({
  providedIn: 'root'
})
export class HubspotService  {

  FORM_SUBMIT_URL = "https://api.hsforms.com/submissions/v3/integration/submit/3776657/75127e93-3da1-4368-b3a7-c680d53483ac";

  // Convert form data into Hubspot data structure
  buildHubspotRequest(data: HubspotFormData) {
    let finalData = {
      "fields": []
    }

    for (let i = 0; i < Object.keys(data).length; i++) {
      const fieldName = Object.keys(data)[i];
      const value = Object.values(data)[i];
      finalData.fields.push({
        name: fieldName,
        value: value
      });
    }
    
    return finalData;
  }

  public async submitToHubspot(data: HubspotFormData) {
    const hubspotData = this.buildHubspotRequest(data);
  
    const response = await fetch(this.FORM_SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(hubspotData)
    });

    return response.ok;
  }

  getStates(): string[] {
    return this.states;
  }

  private states: string[] = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District Of Columbia",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
  ];
}
