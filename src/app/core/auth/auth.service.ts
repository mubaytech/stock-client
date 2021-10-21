import {StorageService} from '../storage.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {distinctUntilChanged, filter, map, skip, switchMap, tap, throwIfEmpty} from 'rxjs/operators';
import {BehaviorSubject, Observable, Subject, timer} from 'rxjs';
import {HttpService} from '../network/http.service';
import {
  LoginGQL,
  LoginMutationVariables,
  LogoutGQL,
  MeGQL,
  MeQuery,
  MeQueryVariables,
  User
} from '../../../generated/types.graphql-gen';
import {Apollo} from "apollo-angular";
import {WatchQueryOptionsAlone} from "apollo-angular/types";

@Injectable()
export class AuthService {
  public $authenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public $user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public $logout = new Subject();

  constructor(
    private httpClient: HttpClient,
    private storageServices: StorageService,
    public httpService: HttpService,
    private loginGQL: LoginGQL,
    private logoutGQL: LogoutGQL,
    public apollo: Apollo,
    public meGQL: MeGQL
  ) {
    this.user.pipe(skip(1), distinctUntilChanged()).subscribe(value => {
      this.$authenticated.next(!!value);
    });
    this.authenticated.pipe().subscribe(value => {
      if (value === false) {
        this.userSet(null).then();
      }
    });
    this.$logout.pipe(
      switchMap(() => {
        return logoutGQL.mutate();
      })
    ).subscribe(() => {
      //
    });
    timer(1000).pipe(
      switchMap(_ => this.me())
    ).subscribe(({data}) => {
      if (data?.me) {
        this.userSet(data.me).then()
      }
    })
    this.userGet().then();
  }


  private async userSet(user: User) {
    await this.storageServices.setObject('logged_user', user);
    this.$user.next(user || null);
  }

  private async userGet() {
    const user: User = await this.storageServices.getObject('logged_user') as User;
    this.$user.next(user || null);
  }

  login(data: LoginMutationVariables) {
    return this.loginGQL.mutate(data)
      .pipe(
        tap(
          async (res) => {
            // console.log(res)
            await this.userSet(res.data?.login.user as User);
            return res;
          },
          error => {
            //
          }
        ),
      );

  }

  logout() {
    this.$logout.next(true);
    this.$authenticated.next(false);
  }


  // token: Observable<{ token: string }> = this.httpClient.get<{ token: string }>(this.httpService.baseUrl + '/token', {
  //   ...this.httpService.options,
  //   responseType: 'json',
  //   observe: 'body'
  // });

  user = this.$user.asObservable();

  authenticated: Observable<boolean> = this.$authenticated.asObservable().pipe(
    distinctUntilChanged(),
    filter(value => value !== null)
  );

  me(options?: WatchQueryOptionsAlone<MeQueryVariables, MeQuery>) {
    return this.meGQL.watch({}, options).valueChanges;
  }


}

