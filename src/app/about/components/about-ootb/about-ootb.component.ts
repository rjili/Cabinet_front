import { Component, OnInit } from '@angular/core';
import {
  faRetweet,
  faExclamationTriangle,
  faLongArrowAltRight,
  faKey,
  faCog,
  faGlobe,
  faServer,
  faRedo,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import { faSass, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'prx-about-ootb',
  templateUrl: './about-ootb.component.html',
  styleUrls: ['./about-ootb.component.scss']
})
export class AboutOotbComponent implements OnInit {
  longArrowAltRight = faLongArrowAltRight;
  items = [
    {
      label: 'Authentication',
      blocks: [
        {
          description: `<p class="bold">Stop reinventing the wheel.</p>
          <p>We've included all the base code you need to <span class="bold">start right out-of-the-box</span> developing your project.</p>
          <p class="bold">You just focus on your business.</p>`,
          lang: 'typescript',
          title: 'Login Component',
          icon: faJs,
          code: `
/**
 * Logs-in the user
 * @param form The form value: user + password
 */
login({ valid, value }: { valid: boolean; value: any }) {
  if (valid) {
    this.isLoading = true;

    this.authenticationService
      .login(value)
      .pipe(
        finalize(() => {
          this.form.markAsPristine();
          this.isLoading = false;
        })
      )
      .subscribe(
        credentials => {
          this.route.queryParams.subscribe(params => this.redirect(params));
        },
        error => {
          this.error = error;
        }
      );
  }
}`
        },
        {
          description: `<p class="bold">Little to zero code.</p>
          <p>Sometimes you will need to <span>customize just a little</span> our base code, to implement your own business rules.</p>
          <p>After all, we try to write all the base code, <span class="italic">- yes, the one no ones likes to write -</span>, <span class="underline italic">but you're in charge always</span>.</p>`,
          lang: 'typescript',
          title: 'Auth Service',
          icon: faJs,
          code: `
/**
 * Authenticates the user.
 * @param context The login parameters.
 * @return The user credentials.
 */
login(context: LoginContext): Observable<AuthorizationEntity> {
  this.loggedIn = true;

  // Replace by proper authentication call
  const data: AuthorizationEntity = {
    username: context.username,
    accessToken: '123456',
    fullName: '',
    admin: true,
    authorized: true,
    email: '',
    expiresIn: 1,
    newUser: false
  };

  this.credentialsService.setCredentials(data, context.remember);
  return of(data);
}`
        }
      ],
      icon: faKey
    },
    {
      label: 'Internationalization (i18n)',
      blocks: [
        {
          description: `<p>You will be given with access to a service, a directive and a pipe to handle any dynamic or static content.</p>
          <p>Static content translations are done easely through an JSON translation files.</p>`,
          lang: 'json',
          title: 'JSON translation file',
          icon: faJs,
          code: `
{
  "APP_NAME": "Proxima",
  "LOGIN_DEMO": "This is a demo only, no data will be processed. You can use any values you want",
  "Already have an account?": "Already have an account?",
  "Don't have an account yet?": "Don't have an account yet?",
  "Create it here": "Create it here",
  "About": "About",
  "Forgot your password?": "Forgot your password?",
  "Email": "Email",
  "Email is required": "Email is required",
  "Full Name": "Full Name",
  "Full name is required": "Full name is required",
  "Home": "Home",
  "Logged in as": "Logged in as",
  "Login": "Login"
  ...
}`
        },
        {
          lang: 'json',
          title: 'JSON translation file',
          icon: faJs,
          code: `
{
  "APP_NAME": "Proxima",
  "LOGIN_DEMO": "Esta es una demo solamente, sus datos no serán procesados. Puede usar cualquier valor que desee",
  "Already have an account?": "¿Ya tiene una cuenta?",
  "Don't have an account yet?": "¿Aún no tiene cuenta?",
  "Create it here": "Creela aquí",
  "About": "Acerca de",
  "Forgot your password?": "¿Ha olvidado su contraseña?",
  "Email": "Correo electrónico",
  "Email is required": "Correo electrónico es requerido",
  "Full Name": "Nombre Completo",
  "Full name is required": "Nombre Completo es requerido",
  "Home": "Inicio",
  "Logged in as": "Conectado como",
  "Login": "Iniciar sesión"
  ...
}`
        },
        {
          description: `<p>Once your files are in place with the translations you need, use the <code>translate</code> directive, pipe or service.</p>
          <p>Refer to <a href="https://github.com/ngx-translate/core" target="_blank">ngx-translate</a> library if you would like to dive deep into this, anyway everything is done already for you</p>`,
          lang: 'html',
          title: 'HTML template',
          icon: faHtml5,
          code: `
<h2 class="display-4 display-lg-3 text-contrast mt-4 mt-md-0">
  Welcome to <span class="bold d-block" translate>APP_NAME</span>
</h2>

<p class="small alert alert-warning text-center rounded-pill mb-5" translate>LOGIN_DEMO</p>

<div class="form-group">
  <label class="control-label bold small text-uppercase" translate>Password</label>
  <input
    type="password"
    formControlName="password"
    class="form-control bg-light form-control-rounded"
    [placeholder]="'Username' | translate"
  />
  <small [hidden]="form.controls.password.valid || form.controls.password.untouched" class="text-danger" translate>
    Password is required
  </small>
</div>
`
        }
      ],
      icon: faGlobe
    },
    {
      label: 'HTTP request loader indicator',
      blocks: [
        {
          description: `<p class="bold">Loading indicators, for every need.</p>
          <p>We've created base loading indicators to tell your users something is happening on the background, here is the base code to implement it.</p>
          <ul><li>Make a request to your endpoint. We've done this by using services wrapper</li><li>Use the <code>prx-loader</code> component with any of the predefined templates - or create your own -</li></ul>`,
          lang: 'typescript',
          title: 'Http call',
          icon: faJs,
          code: `
export class MessagesComponent implements OnInit {
  ngOnInit() {
    this.isLoading = true;
    
    this.messagesService
    .getLatestMessages()
    .subscribe((messages: Message[]) => {
      this.isLoading = false;
      this.messages = messages;
    });
  }
}`
        },
        {
          description: `<p>Control the time the loader is visible by using the <code>isLoading</code> property.</p>
          <p>In the bellow sample, <code>isLoading</code> is set to true when the request starts and as soon as the data is returned from the server is turns into false</p>`,
          lang: 'html',
          title: 'HTML template',
          icon: faHtml5,
          code: `
<ng-container *ngIf="messages && messages.length; else loading">
  <a href="javascript:;" class="list-group-item list-group-item-action" *ngFor="let message of messages">
    ...
  </a>
</ng-container>

<ng-template #loading>
  <prx-loader template="user-messages" [isLoading]="isLoading"></prx-loader>
</ng-template>
`
        },
        {
          lang: 'html',
          title: 'Result',
          icon: faCog,
          template: 'loader'
        }
      ],
      icon: faRedo
    },
    {
      label: 'API calls',
      blocks: [
        {
          description: `<p>Our theme uses <span class="bold">real API calls</span>, not just plain hard-coded values on the components, this means you just need to invest little to no effort on configuring API endpoints to get data from your backend.</p>
          <p>We first create a specific service for a business rule, <code>UserService</code> per instance. This is in charge to interact with your API endpoints.</p>`,
          lang: 'typescript',
          title: 'Service definition',
          icon: faJs,
          code: `
const routes = {
  all: () => '/users/all',
  paged: (count: number) => '/users/all/\${count}'
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private api: ApiService) {}

  getPaged(page: number): Observable<User[]> {
    return this.api.query<User>(routes.paged(page * PerPage), User);
  }
}`
        },
        {
          description: `<p>After you've configured the possibles interactions with the API, just inject the service wherever you need it to use.</p>
          <p class="bold">Proxima will save you tons of hours configuring and testing your code.</p>`,
          lang: 'typescript',
          title: 'Service usage',
          icon: faJs,
          code: `
export class UsersComponent implements OnInit {

  constructor(private _users: UsersService) {}

  ngOnInit() {
    this.isLoading = true;
    
    this._users
    .getPaged(10)
    .subscribe((users: Users[]) => {
      this.users = users;
    });
  }
}`
        }
      ],
      icon: faCloud
    },
    {
      label: 'API proxy',
      blocks: [
        {
          description: `<p class="bold">API proxy configuration</p>
<p>This allows you to proxy HTTP request like <code>http.get('/api/stuff')</code> to another server/port. This is especially useful during app development to avoid CORS issues while running a local server.</p>
<p>For more details and options, see <a href="https://angular.io/guide/build#using-corporate-proxy" target="_blank">Using corporate proxy</a> on the Angular docs.</p>`,
          lang: 'typescript',
          icon: faJs,
          code: `
const proxyConfig = [
  {
    context: '/api',
    pathRewrite: { '^/api': '' },
    target: 'https://5studios.net/thmes/api',
    changeOrigin: true,
    secure: false
  }
];`
        }
      ],
      icon: faServer
    }
  ];
  currentSlide: number = 0;

  constructor() {}

  ngOnInit(): void {}

  updateSlider(currentSlide: number) {
    this.currentSlide = currentSlide;
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
  }
}
