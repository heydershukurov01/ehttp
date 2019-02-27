import {Observable} from 'rxjs';

export interface Request {
  initialize(): void;
  setApi(api: string): this;
  setHeaders(headers: any): this;
  setParams(params: any): this;
  request(parameter): Observable<any>;
}
