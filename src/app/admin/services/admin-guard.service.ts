import { Observable } from 'rxjs/Observable';
import { UserService} from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService , private userService: UserService) { }

  canActivate(): Observable<boolean> {
   return this.auth.appUser$
    .map(y => y.isAdmin );
  }

}
