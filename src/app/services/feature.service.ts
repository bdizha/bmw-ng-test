import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Feature} from '../models/feature.interface';
import {Observable, of, throwError} from 'rxjs';
import {Injectable} from '@angular/core';

// @ts-ignore
// @ts-ignore
@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  apiURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';

  constructor(private httpClient: HttpClient) {
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getFeatures(): Observable<any> {
    return this.httpClient.get(this.apiURL + '&starttime=2023-01-01&endtime=2023-01-11&minmagnitude=5');
  }

  public getFeature(id: string): Observable<Feature> {
    return this.httpClient.get<Feature>(this.apiURL + '&eventid=' + id);
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
