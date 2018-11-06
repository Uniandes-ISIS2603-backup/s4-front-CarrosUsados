import { TestBed } from '@angular/core/testing';

import { HttpErrorInterceptor } from './httperrorinterceptor.service';
import { ToastrService } from 'ngx-toastr';

describe('HttpErrorInterceptor', () => {

    let httpErrorInterceptor: HttpErrorInterceptor;
    let ToastrService: ToastrService;

    beforeEach(() => {
        httpErrorInterceptor = new HttpErrorInterceptor(ToastrService);
    });

    it('should be created', () => {
        expect(httpErrorInterceptor).toBeTruthy();
    });
    
});
