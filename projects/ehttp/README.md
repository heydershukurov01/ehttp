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
```
import {GET} from 'ehttp';

@Injectable()
export class AnyService {
  constructor(private get: GET) {}

  /**
   * Get Test Data for demonstration
   * @returns {Observable<any>}
   */
  public get(): Observable<any> {
    const optionalRequestSpecificHeaders = {
      "Content-Type": "application/json"
    }
    return this.get.setApi(optionalRequestSpecificHeaders).setApi('https://jsonplaceholder.typicode.com/posts').request();
  }
}
```

## Configurations
You can path custom configuration to Module
```
EHTTPModule.forRoot(
  {
    headers: any;
    message: {
      unAuthenticated: string;
      statusException: string;
      serverException: string;
      appException: string;
    },
    logout: string,
    logoutCodes: number[],
    hook: string;
  }
)
```
### headers
Default headers for all XMLHTTP requests

### message
Is for Exception Handler
 - `unAuthenticated` Message for showing 401 or 400 status codes while request made
 - `statusException` Message for showing 500 and other status codes request made
 - `serverException` Message for showing server side exception such as request failed or server did not responded to request
 - `appException`    Message for showing non HTTPEXception exception while making request such as incompatible response type 

### logout
 url link for redirecting if response status code is 400 or 401
 
### logoutCodes
 Other status codes for redirecting to logout
 
### hook
 Slack hook url for live Exception reporting 
 
## Copyright
Copyright © 2018

