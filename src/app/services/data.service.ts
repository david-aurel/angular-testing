import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

export class DataService {
  constructor(private url: string, private http: HttpClient) {}
  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  udpate(resource, toBeUpdated) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify(toBeUpdated))
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 404) {
      return throwError(new BadInput(error));
    }

    return throwError(new AppError(error));
  }
}
