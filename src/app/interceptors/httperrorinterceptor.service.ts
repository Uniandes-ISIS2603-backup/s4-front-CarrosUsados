import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpErrorInterceptor  extends HttpErrorResponse {
    
    constructor (private toastrService: ToastrService){ super (toastrService); }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    let errMsg: string = '';
                    let errorType : string = 'Error';
                    // Client Side Error
                    if (error.error instanceof ErrorEvent) {
                        errMsg = `Error: ${error.error.message}`;                     
                    }
                    else {  // Server Side Error                       
                        if (error.status == 0) {
                            errMsg = `Error Code: ${error.status},  Message: ${error.statusText} `;    
                            errorType = 'Major Error';
                        }                      
                        else {
                             errMsg = `Error Code: ${error.status},  Message: ${error.message}`;                             
                        }                      
                        this.toastrService.error(errMsg, errorType);
                    }
                    
                    console.log(errMsg);
                    return throwError(errMsg);
                })
            )
    }
}   