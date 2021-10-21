import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
const uri = environment.apiUrl + '/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new InMemoryCache(),
    };
}
let GraphQLModule = class GraphQLModule {
};
GraphQLModule = __decorate([
    NgModule({
        providers: [
            {
                provide: APOLLO_OPTIONS,
                useFactory: createApollo,
                deps: [HttpLink],
            },
        ],
    })
], GraphQLModule);
export { GraphQLModule };
//# sourceMappingURL=graphql.module.js.map