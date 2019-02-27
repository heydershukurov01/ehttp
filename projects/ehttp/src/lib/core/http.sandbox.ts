import {Observable} from 'rxjs';

export namespace CORE {
  export abstract class HttpSandbox {
    private _api: string;
    private _headers: any;
    private _payload: any;
    private _params: any;
    private _options: any = null;
    constructor() {}

    /**
     * Initialize
     */
    protected initialize(): void {
      this._api = null;
      this._headers = null;
      this._payload = null;
      this._params =  null;
    }
    /**
     * Set Api Url
     */
    protected setApi(api: string) {
      this._api = api;
    }

    /**
     * Get API data
     */
    protected getApi(): string {
      return this._api;
    }

    /**
     * Set Parameters
     */
    protected setParams(params: any) {
      this._params = params;
    }

    /**
     * Set Options
     */
    protected setOptions(options: any) {
      this._options = options;
    }

    /**
     * Get Parameters
     */
    protected getOptions(): any {
      return this._options;
    }

    /**
     * Get Parameters
     */
    protected getParams(): any {
      return this._params;
    }

    /**
     * Get Headers
     */
    protected getHeaders(): any {
      return this._headers;
    }
    /**
     * Set Headers Object
     */
    protected setHeaders(headers: any ) {
      if (this._headers) {
        Object.assign(this._headers , {...headers});
      } else {
        this._headers = {...headers};
      }
    }

    /**
     * Show Version of Package
     */
    protected version() {
      console.info('EHTTP  V 0.2.0');
    }

    protected getPayload(): any {
      return this._payload;
    }
    /**
     * Set Payload Data
     */
    protected setPayload(payload: any) {
      this._payload = payload;
    }

    /**
     * Generate Options;
     */
    protected abstract options(): any;
    /**
     * Make Request
     */
    public abstract request(parameter?: any): Observable<any>;
  }
}

