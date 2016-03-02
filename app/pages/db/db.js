import {Page, NavController} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {TabsPage} from '../tabs/tabs';
import {UserData} from '../../providers/user-data';
//

/*
  Generated class for the LocalDbDemoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/signup/signup.html',
  //templateUrl: 'build/pages/db/db.html'
  // I use signup page for the tests because db page was just a copy
  // of that page but did not work with the directives
})
export class DbPage {  
  static get parameters(){
    return [[NavController], [UserData]];
  }
  
  constructor(nav, userData) {
	this.nav = nav;
    this.userData = userData;

	//this.db = {};
	this.signup = {};
	this.signup.exists = false;
    this.submitted = false;
  }
  
  doExample(){
	var persons = {};
	persons["2901465"] = {id: 2901465, name:"Tom"};
	persons["3305579"] = {id: 3305579, name:"Su"};
	persons["6492003"] = {id: 6492003, name:"Pete"};
	try {
		localStorage["personTable"] = JSON.stringify( persons);
		} catch (e) {
			alert("Error when writing to Local Storage\n" + e);
		}
  }
  
  doExample2(){
	var persons = {};
	try {
		persons = JSON.parse( localStorage["personTable"]);
		console.log(JSON.stringify(persons["2901465"]));
		console.log(JSON.stringify(persons["false"]));
		} catch (e) {
			alert("Error when reading from Local Storage\n" + e);
		}
  }

  doExample3(){
	var persons = {};
	persons = JSON.parse(localStorage["non-existent"]);
  }
  
  static load(table_id){
	var table = {};
	try{
		// try to load table
		table = JSON.parse(localStorage[table_id]);
		return table;
	} catch(err){
		console.log("Error when loading table " + err);
		try {
		// create table if it does not exist yet
		localStorage[table_id] = JSON.stringify(table);
		return JSON.parse(localStorage[table_id]);
		} catch (e) {
			throw ("Error when writing to Local Storage\n" + e);
		}
	}
  }
  
  static add(table_id, row){
	// actually add or update
	var table = DbPage.load(table_id);
	table[row.id] = row;
	localStorage[table_id] = JSON.stringify(table);
  }
  
  static get(table_id, key){
	var table = DbPage.load(table_id);
	var row = table[key];
	return row;
  }
  
  static save(table_id){
	// save the table in the appropriate file
  }
  
  static exists(table_id, value){
	// load user database
	var table = DbPage.load(table_id);
	// check wether the id already exists
	var select = JSON.stringify(table[value]);
	// return wether the id exists or not
	return (select != undefined);
  }

  onSignup(form){
	this.submitted = true;
	console.log(form);
	
	var id = this.signup.username;
	var wp = this.signup.password;
	
	// should be replaced by a directive
	if(DbPage.exists(id)){
		console.log(this.signup.username);
		this.signup.exists = true;
		throw "Username already exists";
	}

    if (form.valid) {
	  this.doExample();
	  this.doExample2();
	  this.doExample3();
	  this.nav.push(TabsPage);
    }
  }
}
