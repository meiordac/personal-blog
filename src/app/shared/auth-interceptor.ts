import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { AuthenticationService } from "../services/authentication.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthenticationService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authHeader = this.auth.getAuthorization();
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set("Authorization", authHeader)
    });
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
