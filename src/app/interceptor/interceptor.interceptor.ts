import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserServiceService} from '../service/user-service.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private inter: UserServiceService) {}

  intercept(request: HttpRequest<any>, handler: HttpHandler){
    const modifiedRequest = request.clone({
      headers: request.headers.append(
        'authorization',
        `Bearer ${this.inter.getToken()}`
      )
    });
    return handler.handle(modifiedRequest)
  }
  }

