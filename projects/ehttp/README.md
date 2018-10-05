# EHTTP
**EHTTP** is a Angular library. Toastr and jQuery is required for user side exception UI. The goal is to create a simple core library that makes HTTP requests in Abstractional classes.

## Current Version
0.1.0

## Install

#### [npm](https://www.npmjs.com/package/toastr)
```
npm install --save ehttp
```
## Usage
In your app.module.ts (bootstrap module)
```
import {EHTTPModule} from 'ehttp';
```
```
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EHTTPModule.forRoot()
  ]
})
```

In your any.service.ts 

GET Request
```
import {GET} from 'ehttp';

@Injectable()
export class AnyService {
  constructor(private _get: GET) {}

  /**
   * Get Test Data for demonstration
   * @returns {Observable<any>}
   */
  public get(id?): Observable<any> {
    const optionalRequestSpecificHeaders = {
      "Content-Type": "application/json"
    }
    return this._get
      .setHeaders(optionalRequestSpecificHeaders)
      .setApi('https://jsonplaceholder.typicode.com/posts')
      .request(id);
  }
}
```
POST Request
```
import {POST} from 'ehttp';

@Injectable()
export class AnyService {
  constructor(private _post: POST) {}

  /**
   * Get Test Data for demonstration
   * @returns {Observable<any>}
   */
  public post(payload: any): Observable<any> {
    const optionalRequestSpecificHeaders = {
      "Content-Type": "application/json"
    }
    return this._post
      .setHeaders(optionalRequestSpecificHeaders)
      .setApi('https://jsonplaceholder.typicode.com/posts')
      .setPayload(payload)
      .request();
  }
}
```
PUT Request
```
import {PUT} from 'ehttp';

@Injectable()
export class AnyService {
  constructor(private _put: PUT) {}

  /**
   * Get Test Data for demonstration
   * @returns {Observable<any>}
   */
  public put(payload: any, id?: any): Observable<any> {
    const optionalRequestSpecificHeaders = {
      "Content-Type": "application/json"
    }
    return this._put
      .setPayload(payload)
      .setHeaders(optionalRequestSpecificHeaders)
      .setApi('https://jsonplaceholder.typicode.com/posts')
      .request(id);
  }
}
```
PATCH Request
```
import {PATCH} from 'ehttp';

@Injectable()
export class AnyService {
  constructor(private _patch: PATCH) {}

  /**
   * Get Test Data for demonstration
   * @returns {Observable<any>}
   */
  public patch(payload: any, id?: any): Observable<any> {
    const optionalRequestSpecificHeaders = {
      "Content-Type": "application/json"
    }
    return this._patch
      .setHeaders(optionalRequestSpecificHeaders)
      .setPayload(payload)
      .setApi('https://jsonplaceholder.typicode.com/posts')
      .request(id);
  }
}
```
DELETE Request
```
import {DELETE} from 'ehttp';

@Injectable()
export class AnyService {
  constructor(private _delete: DELETE) {}

  /**
   * Get Test Data for demonstration
   * @returns {Observable<any>}
   */
  public delete(id?: any): Observable<any> {
    const optionalRequestSpecificHeaders = {
      "Content-Type": "application/json"
    }
    return this._delete
      .setHeaders(optionalRequestSpecificHeaders)
      .setApi('https://jsonplaceholder.typicode.com/posts')
      .request(id);
  }
}
```

## Configurations
You can path custom default configuration to Module
```
EHTTPModule.forRoot(
  {
    headers: any;
  }
)
```
### Headers
Default headers for all XMLHTTP requests

## Support
Tested in Chrome , Firefox , IE 9-11 , Edge , Safari

## Copyright
Copyright © 2018

