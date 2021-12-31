import { Observable, of } from 'rxjs';
import { AuthorizationEntity, LoginContext } from './authentication.models';

export class MockAuthenticationService {
  credentials: AuthorizationEntity | null = {
    authorized: true,
    email: 'test@user.com',
    fullName: 'Test User',
    expiresIn: 3600,
    accessToken: 'token-123',
    admin: true,
    Image: '',
    newUser: false,
    menu: []
  };

  login(context: LoginContext): Observable<AuthorizationEntity> {
    return of({
      authorized: true,
      email: 'test@user.com',
      fullName: 'Test User',
      expiresIn: 3600,
      accessToken: 'token-123',
      admin: true,
      Image: '',
      newUser: false,
      menu: []
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }
}
