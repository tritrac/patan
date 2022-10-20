import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
 // _id: number;
  //name: string;
  //email: string;
  //username: string;

   mem_id:number
   old_mem_id:number;
   mem_family_id:number;
   mem_fname:string;
   mem_mname:string;
   mem_lname:string;
   mem_hof_relation:string;
   mem_gender:string;
   mem_dob:string;
   mem_bloodgroup_id:string;
   mem_education_id:number;
   mem_education_details:string;
   mem_maritalstatus_id:string;
   mem_occupation_id:number;
   mem_occupation_details:string;
   mem_mobile:string;
   mem_emailid:string;
   mem_officename:string;
   mem_officeaddress:string;
   mem_officephone:string;
   mem_officewebsite:string;
   mem_otherinformation:string;
   mem_isgnenralbodymember:string;
   mem_iscomiteemember:string;
   mem_pic:string;
   mem_status:string;
   mem_officeemailid:string;
   mem_medical_policy:string;
   status:string;
   flag:boolean;
   data:any;
   success:any;
   message:any;
}

@Injectable({
  providedIn: 'root'
})

export class UserCrudService {

  //endpoint = 'http://103.216.146.13:3000/users';
 endpoint = 'http://103.216.146.13:3000/familymember/1';

  httpOptions = {
    headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8", 
          'Accept': 'application/json, text/plain',
          "cache-control": "no-cache", 
          "Access-Control-Allow-Origin": "*", 
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Accept, Authorization, X-Request-With, Access-Control-Request-Method, Access-Control-Request-Headers",
          "Access-Control-Allow-Credentials" : "true",
          "Access-Control-Allow-Methods" : "GET, POST, DELETE, PUT, OPTIONS, TRACE, PATCH, CONNECT",  

    })
  };

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<any> {

    return this.httpClient.post<User>(this.endpoint, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('Error occured'))
      );
  }

  getUser(id): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<User[]>(`Get user id=${id}`))
      );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.endpoint)
      .pipe(
        tap(users => {console.log('Users retrieved!')}),
        catchError(this.handleError<User[]>('Get user', []))
      );
  }

  updateUser(id, user: User): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<User[]>('Update user'))
      );
  }

  deleteUser(id): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<User[]>('Delete user'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
  
}