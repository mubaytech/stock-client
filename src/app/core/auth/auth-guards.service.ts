import {Injectable} from '@angular/core';
import {EMPTY, Observable, ObservableInput, of, pipe, UnaryFunction} from 'rxjs';
import {distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {NetworkService} from '../network/network.service';
import {AuthService} from './auth.service';
import {Level, TypeRole, User} from '../../../generated/types.graphql-gen';


@Injectable()
export class AuthGuardsService {
  ROLES = TypeRole;
  LEVELS = Level;
  levelNumber: {
    [key in Level]: number
  } = {
    SUPER_ADMINISTRATEUR: 99,
    ADMINISTRATEUR: 98,
    CAISSE: 97,
    NOTE: 96,
    SCOLARITE: 95,
    RENSEIGNEMENT: 94,
    PARENT: 93,
    PROFESSEUR: 92,
    ETUDIANT: 91,
  }

  constructor(
    public net: NetworkService,
    public authService: AuthService,
  ) {

  }

  isAdmin = this.userHasRole(TypeRole.Administrateur);

  isSuperAdmin = this.userHasRole(TypeRole.SuperAdministrateur);


  is(role: TypeRole) {
    return this.userHasRole(role);
  }

  public hasRole(role: TypeRole): UnaryFunction<Observable<any>, Observable<boolean>> {
    return pipe(
      switchMap(() => this.authService.user.pipe(distinctUntilChanged((v, t) => v?.id === t?.id))),
      map((user: User) => {
        return !!(user?.roles.find(
          userRole =>
            (
              userRole.slug
              && (
                userRole.slug === role
                || (
                  userRole.slug === TypeRole.Administrateur
                  || userRole.slug === TypeRole.SuperAdministrateur
                )
              )
            )
        ));
      }),
    );
  }

  public hasLevel(level: Level): UnaryFunction<Observable<any>, Observable<boolean>> {
    return pipe(
      switchMap(() => this.authService.user.pipe(distinctUntilChanged((v, t) => v?.id === t?.id))),
      map((user: User) => {
        return !!(user?.roles.find(userRole => this.levelNumber[userRole.level] >= this.levelNumber[level]));
      }),
    );
  }

  public userHasRole(role: TypeRole) {
    return of('').pipe(this.hasRole(role));
  }

  public userHasLevel(level: Level) {
    return of('').pipe(this.hasLevel(level));
  }

  userRole = this.authService.user.pipe(map(value => {
    return value.roles.map((obj) => {
      return obj.slug;
    });
  }));
  mapLevel: {
    [key in Level]: Observable<boolean>
  } = {
    ADMINISTRATEUR: this.userHasLevel(Level.Administrateur),
    SUPER_ADMINISTRATEUR: this.userHasLevel(Level.SuperAdministrateur),
    CAISSE: this.userHasLevel(Level.Caisse),
    NOTE: this.userHasLevel(Level.Note),
    SCOLARITE: this.userHasLevel(Level.Scolarite),
    RENSEIGNEMENT: this.userHasLevel(Level.Renseignement),
    ETUDIANT: this.userHasLevel(Level.Etudiant),
    PROFESSEUR: this.userHasLevel(Level.Professeur),
    PARENT: this.userHasLevel(Level.Parent)
  }

  public get user() {
    return this.authService.$user.getValue();
  }


  logout() {
    this.authService.logout();
  }

}

export function switchMapIf<T, O extends ObservableInput<any>>(to: O): (source: Observable<T>) => Observable<O extends ObservableInput<infer T> ? T : never> {
  return (source: Observable<T>) => source.pipe(
    switchMap<T, O | Observable<never>>((value: T) => {
      if (value) {
        return to;
      } else {
        return EMPTY;
      }
    }),
  );
}


