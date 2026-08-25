# Book

An Angular 18 (standalone components) training front-end for a small **Book** management app. It consumes a companion ASP.NET Web API (`../backend`) over HTTP and is part of a full-stack Angular + ASP.NET training series (see [`doc/`](./doc)).

## Architecture

The app is intentionally small and flat, matching where the training currently stands:

```
src/app/
├── app.component.ts        # Root shell — hosts <app-book-list> and the router outlet
├── app.config.ts           # Standalone app providers: router, HttpClient (fetch-based)
├── app.routes.ts           # Route table (currently empty — no routed views yet)
├── model/
│   └── book.ts             # Book interface (id, title, author, description, createdAt)
├── services/
│   └── book.service.ts     # BookService — HttpClient wrapper calling the Web API
└── book-list/
    └── book-list.component.ts  # Standalone component rendering static + API-backed book lists
```

Key points:

- **Standalone components** throughout — no `NgModule`s. Providers are wired in `app.config.ts` via `provideRouter`, `provideHttpClient(withFetch())`, and `provideZoneChangeDetection`.
- **Service layer**: `BookService` (`src/app/services/book.service.ts`) is the single point of contact with the backend. It injects `HttpClient` and exposes `getBooks(): Observable<Book[]>`.
- **Model-first typing**: the `Book` interface (`src/app/model/book.ts`) defines the shape shared between the mock data and the API response.
- **Component responsibility**: `BookListComponent` fetches data via `BookService` in `ngOnInit`, alongside hardcoded sample data used to illustrate static vs. API-driven rendering during the training.

## Backend integration

`BookService` currently points at the local ASP.NET Web API:

```ts
private apiUrl: string = 'https://localhost:7025';
```

Run the companion project in `../backend` alongside this app so `GET /api/books` resolves. Update `apiUrl` if the backend runs on a different port.

## Training resources

The [`doc/`](./doc) folder contains the reference material for this training track: Angular fundamentals, Angular Services, Angular Observables (RxJS), HTTP communication, and full-stack Angular/ASP.NET integration.

## Development server

Run `ng serve` (or `npm start`) for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
