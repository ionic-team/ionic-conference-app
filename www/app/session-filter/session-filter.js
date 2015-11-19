import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/session-filter/session-filter.html'
})
export class SessionFilterPage {
  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.categories = this.dataService.getCategories();
  }

  onInit() {
    // On Init reset the filters back to the last thing the user had
    this.categories.forEach((category) => {
      category.filterToApply = category.showFilter;
    });
  }

  resetFilters() {
    this.categories.forEach((category) => {
      category.filterToApply = true;
    });
  }

  applyFilters() {
    this.categories.forEach((category) => {
      category.showFilter = category.filterToApply;
    });

    this.dataService.updateCategories(this.categories);
    this.close();
  }
}
