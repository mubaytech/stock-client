import {NgModule} from '@angular/core';
import {Apollo, APOLLO_FLAGS, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink, Options} from 'apollo-angular/http';
import {environment} from '../environments/environment';
import {AuthService} from './core/auth/auth.service';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {ApolloLink} from '@apollo/client/link/core/ApolloLink';
import {onError} from '@apollo/client/link/error';
import {ModalController} from '@ionic/angular';
import {BrowserModule} from '@angular/platform-browser';

const uri = environment.apiUrl + '/graphql'; // <-- add the URL of the GraphQL server here


@NgModule({
  exports: [
    BrowserModule,
    HttpClientModule,
  ],
})
export class GraphQLModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink,
    private modal: ModalController,
    public authService: AuthService
  ) {
    const http = httpLink.create({
      uri,
      withCredentials: true,
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Request-With'
      }),


    } as Options);
    const errorLink = onError(({graphQLErrors, forward, operation, networkError}) => {
      if (graphQLErrors?.length) {
        [graphQLErrors[0]].map((error) => {
            // if (error.message == 'Unauthenticated.') {
            //   authService.logout();
            // }
          }
        );
      }
      if (networkError) { console.log(`[Network error]: ${networkError}`); }
    });


    const link = ApolloLink.from([
      errorLink,
      http,
    ]);
    apollo.create({
      link,
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          errorPolicy: 'all',
        },
        mutate: {
          errorPolicy: 'all'
        },
        watchQuery: {
          errorPolicy: 'all'
        }
      }

    } as ApolloClientOptions<any>);
  }
}
