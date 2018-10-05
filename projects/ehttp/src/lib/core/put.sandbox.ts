import {CORE} from './http.sandbox';
import HttpSandbox = CORE.HttpSandbox;
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Request} from './request';
@Injectable()
export class PUT extends HttpSandbox implements Request  {
  constructor(private _http: HttpClient, @Inject('config') private config: any) {
    super();
    super.setHeaders(this.config.headers);
  }
  /**
   * Initialize
   */
  initialize() {
    super.initialize();
    super.setHeaders(this.config.headers);
  }
  /**
   * Set Api
   */
  public setApi(api: string): this {
    super.setApi(api);
    return this;
  }

  /**
   * Set Headers
   */
  public setHeaders(headers: any): this {
    super.setHeaders(headers);
    return this;
  }

  /**
   * Set Parameters
   */
  public setParams(params: any): this {
    if (params.base64) {
      const base64 = params.base64;
      const base64Parameter = Object.keys(base64);
      const base64Param = base64Parameter[0];
      if (base64Parameter.length > 1) {
        console.warn('[GET] [setParams] First step parameter must be single !');
      }
      delete params.base64;
      const base64Object = btoa(unescape(encodeURIComponent(JSON.stringify(base64[base64Parameter[0]]))));
      Object.assign(params, {[base64Param]: base64Object})
    }
    super.setParams(params);

    return this;
  }
  /**
   * Set Parameters
   */
  public setPayload(payload: any): this {
    super.setPayload(payload);
    return this;
  }

  /**
   * Set Options
   */
  public setOptions(options) {
    super.setOptions(options);
    return this;
  }
  /**
   * Version
   */
  public version() {
    super.version();
    return this;
  }

  /**
   * Generate Options
   */
  protected options(): any {
    const options = {
      headers: new HttpHeaders(super.getHeaders()),
      params: super.getParams()
    };
    Object.assign(options, super.getOptions());
    return options
  }

  /**
   * Make Request
   */
  public request(parameter = ''): Observable<any> {
    const request = this._http.put(super.getApi() + parameter, super.getPayload(), this.options());
    this.initialize();
    return request;
  }
}
