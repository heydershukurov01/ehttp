import {ModuleWithProviders, NgModule} from '@angular/core';
import {GET} from './core/get.sandbox';
import {POST} from './core/post.sandbox';
import {PATCH} from './core/patch.sandbox';
import {PUT} from './core/put.sandbox';
import {DELETE} from './core/delete.sandbox';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: []
})
export class EHTTPModule {
  static forRoot(config = InitialConfig): ModuleWithProviders {
    return {
      ngModule: EHTTPModule,
      providers: [
        GET,
        POST,
        PATCH,
        PUT,
        DELETE,
        {provide: 'config', useValue: config},
       ]
    };
  }
}
const InitialConfig: {
  headers: any;
} = {
  headers: {},
};
