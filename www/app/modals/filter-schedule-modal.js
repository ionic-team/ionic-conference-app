import {Page} from 'ionic/ionic';
import {DataService} from '../service/data';

@Page({
  templateUrl: 'app/modals/filter-schedule-modal.html',
  providers: [DataService]
})
export class FilterScheduleModal {
  constructor(data: DataService) {
    this.categories = data.getCategories();
  }

  onInit() {
    // On Init reset the filters back to the last thing the user had
    this.categories.forEach((category) => {
      category.filterToApply = category.showFilter;
    });
  }

  resetFilters() {
    this.categories.forEach((category) => {
      category.filterToApply =  true;
    });
  }

  applyFilters() {
    this.categories.forEach((category) => {
      category.showFilter = category.filterToApply;
    });

    this.close();
  }
}
