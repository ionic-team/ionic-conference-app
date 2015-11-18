import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/filter-schedules/filter-schedules.html'
})
export class FilterSchedules {
  constructor(dataService: DataService) {
    this.categories = dataService.getCategories();
    this.dataService = dataService;
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
