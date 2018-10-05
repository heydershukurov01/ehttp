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
  }
)
```
### headers
Default headers for all XMLHTTP requests

## Copyright
Copyright © 2018

