import {ModuleWithProviders, NgModule} from '@angular/core';
import {POST} from './core/post.sandbox';
import {PUT} from './core/put.sandbox';
import {PATCH} from './core/patch.sandbox';
import {DELETE} from './core/delete.sandbox';
import {GET} from './core/get.sandbox';
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
