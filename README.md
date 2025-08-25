# NextParty

## Demo

https://2winsen-archive.github.io/next-party/

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Tips

- `src/config.json` contains map of custom next party dates and image paths
- `src\app\utils\date-utils.ts function now()` can be adjusted to test any date as current date (usage: `return fakeDate('2025-08-22 23:59:50.000');`)
- `src\app\app.component.ts` does console.log of app version from package.json
- `src\app\slick-carousel\slick-carousel.component.html` carousel of images
- `src\assets` assets

## Build and Deploy to GitHub pages

1. Change version in `package.json`
1. Optimize assets - tinypng -> webp
1. Run `npm test`
1. Run `npm run build-prod`
   - **TO TEST BUILD LOCALLY** run `npm run update-docs-local`
   - Cd to `docs-local`
   - Run `npx http-server`
   - Navigate to `http://localhost:8080/next-party`
1. Commit changes
1. Push all your changes + docs directory

## Update ONLY next party date

- adjust `config.json`
