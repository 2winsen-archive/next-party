# NextParty
## Demo
https://2winsen-archive.github.io/next-party/

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Tips
- `src\app\core\next-party.service.ts` contains map of custom next party dates
- `src\app\utils\fake-date.ts` can be used to test any date (not affecting production build)
- `src\app\app.component.ts` does console.log of app version from package.json

## Build and Deploy to GitHub pages

1. Change version in `package.json`
1. Run `npm run test-ci`
1. Run `npm run build-prod`
1. Push all your changes + docs directory
