import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private authenticationURL = 'https://personal-blog-api.herokuapp.com/authenticate';  // URL to web api
  
  constructor(private http: Http) { }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // we are just gonna log the error in our console
    return Promise.reject(error.message || error);
  }
  
  login(email : string, password : string) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.authenticationURL, 
        JSON.stringify({ email, password }), 
        { headers })
               .toPromise()
               .then(response => response.json() as Comment[])
               .catch(this.handleError);
  } 

    logout() {
        return null;
  } 
}
