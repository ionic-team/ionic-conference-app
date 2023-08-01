import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-btb',
  templateUrl: './btb.html',
  styleUrls: ['./btb.scss'],
})
export class BtbPage {
  userManualLink = 'https://miningexponamibia.com/wp-content/uploads/2023/07/b2b.pdf'; // Replace with the actual user manual link
  buttonColor = '#e99909';
  isButtonClicked = false;

  constructor(private platform: Platform) {}

  registerForBtB(): void {
    // Open the registration link in a new browser tab/window
    this.platform.ready().then(() => {
      window.open('https://b2b.miningexponamibia.com/index.php'); // Replace with the actual registration link
    });

    // Update button colors when clicked
    this.buttonColor = '#3f51b5';
    this.isButtonClicked = true;

    // Reset button colors after a short delay (if needed)
    setTimeout(() => {
      this.buttonColor = '#e99909';
      this.isButtonClicked = false;
    }, 1000); // Change 1000 to the desired delay in milliseconds (1 second in this example)

    console.log('Register for btb');
  }
}
