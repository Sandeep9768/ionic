import { Http } from '@angular/http';


import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  constructor(public http: Http) { }

  BASE_URL: any = "http://localhost:7000";
  // BASE_URL: any = "http://192.168.0.127:4000/";
  // BASE_URL: any = "http://ec2-13-127-254-77.ap-south-1.compute.amazonaws.com:3000/users/";
  alldata(url) {


    return this.http.get(this.BASE_URL + url, {});
  }

  postAllData(url, data) {
    console.log(data, 'services', url);


    return this.http.post(this.BASE_URL + url, data);
  }



}
