# AngularApi Frontend

Angular frontend for the [AngularApi](../backend) ASP.NET Core Web API.

## Stack

- **Angular 18**
- **Node.js 18.19+ / 20.11+** (required by Angular 18)
- **TypeScript**
- Backend: ASP.NET Core Web API on **.NET 8** (see [`../backend`](../backend))

## Prerequisites

- [Node.js](https://nodejs.org/) 18.19+ or 20.11+
- [Angular CLI](https://angular.dev/tools/cli) 18: `npm install -g @angular/cli@18`
- The backend API running (see [`../backend/README.md`](../backend/README.md))

## Getting Started

This folder is currently empty and not yet scaffolded. To create the Angular app:

```bash
ng new frontend --directory . --routing --style scss
```

Once scaffolded:

```bash
npm install
ng serve
```

The app will be available at `http://localhost:4200` and will proxy/consume the API described below.

## Backend API

The backend runs from [`../backend`](../backend) with `dotnet run`, exposing:

| Profile | URL |
|---|---|
| HTTP | `http://localhost:5261` |
| HTTPS | `https://localhost:7025` |
| Swagger UI | `/swagger` on either URL above |

Configure the frontend's API base URL (e.g. in `src/environments/environment.ts`) to point at `https://localhost:7025`.

### CORS

The backend must allow the frontend's origin (`http://localhost:4200`) in its CORS policy for local development. Verify this in `../backend/Program.cs` before making cross-origin requests.

## Project Structure (once scaffolded)

```
frontend/
  src/
    app/
      core/          # singleton services, interceptors, guards
      features/      # feature modules/components (one per API resource)
      shared/         # shared components, pipes, directives
    environments/     # environment.ts / environment.development.ts
  angular.json
  package.json
```

## Scripts

| Command | Description |
|---|---|
| `ng serve` | Run the dev server at `http://localhost:4200` |
| `ng build` | Production build to `dist/` |
| `ng test` | Run unit tests |
| `ng generate component <name>` | Scaffold a new component |
