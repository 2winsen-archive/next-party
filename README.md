# NextParty

## Demo

https://2winsen-archive.github.io/next-party/

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Tips

- `src/config.json` contains map of custom next party dates and image paths
- `src\app\utils\fake-date.ts` can be used to test any date (not affecting production build)
- `src\app\app.component.ts` does console.log of app version from package.json
- `src\app\slick-carousel\slick-carousel.component.html` carousel of images
- `src\assets` assets

## Build and Deploy to GitHub pages

1. Optimize assets - tinypng -> webp
1. Run `npm run test`
1. Run `npm run build-prod`
1. Commit changes
1. Change version in `package.json` by `npm version patch`
1. Push all your changes + docs directory

## N.B. to change only image + date use `src/config.json` and upload image to `docs/assets` and `src/assets`
