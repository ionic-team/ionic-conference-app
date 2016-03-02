import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import {UserData} from './user-data';
import {DbPage} from '../pages/db/db';


@Injectable()
export class ProfileData {
  static get parameters(){
    return [[Http], [UserData]];
  }

  constructor(http, user) {
    // inject the Http provider and set to this instance
    this.http = http;
    this.user = user;
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('data/users-data.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = this.processData(res.json());
        resolve(this.data);
      });
    });
  }

  processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions

    // loop through each profile in the profiles list
    data.profiles.forEach(profile => {
      // loop through each match in the profile's matches list
	  if (!profile.profilePic){
		  profile.profilePic = "img/ica-slidebox-img-4.png";
	  }
	  if (!profile.about){
		  profile.about = "Not that much to say";
	  }
	  DbPage.add("users", profile);
    });

    return data;
  }

  getMatches(data, profile) {
    // loop through each profile and load the profile data
    // using the profile id as the key
    var actualMatches = [];
    if (profile.matches){
		if (profile.matches.ids) {
		  profile.matches.ids.forEach(id => {
			let match = data.profiles.find(s => s.id === id);
			if (match) {
			  if (match.matches){
				match.matches.ids = match.matches.ids || [];
				let matched = match.matches.ids.find(s => s === profile.id);
				if(matched){
				  actualMatches.push(match);
				}
			  }
			}
		  });
		}
	}
	return actualMatches;
  }
  
  getProfiles() {
    return this.load().then(data => {
      return data.profiles.sort((a, b) => {
        let aName = a.name.split(' ').pop();
        let bName = b.name.split(' ').pop();
        return aName.localeCompare(bName);
      });
    });
  }

}
