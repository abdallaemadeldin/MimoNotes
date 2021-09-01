## Get Started
To get started you can run the app in development

```
git clone https://github.com/abdallaemadeldin/MimoNotes.git
cd MimoNotes
yarn
cd ios && pod install && cd ..
yarn start
yarn android | yarn ios
```

Launch the test runner

```sh
yarn test
```

## File Structure
```
MimoNotes
├─ src
│  ├─ assets
│  │  └─ logo.png
│  ├─ components
│  │  └─ toolbar.js
│  ├─ context
│  │  └─ products.context.js
│  ├─ hooks
│  │  ├─ details.hook.js
│  │  ├─ index.js
│  │  ├─ products.hook.js
│  │  └─ splash.hook.js
│  ├─ lib
│  │  └─ windowStack.js
│  └─ screens
│     ├─ Details
│     │  ├─ Details.js
│     │  ├─ style.js
│     │  └─ __test__
│     │     ├─ Details.test.js
│     │     └─ __snapshots__
│     │        └─ Details.test.js.snap
│     ├─ Products
│     │  ├─ Products.js
│     │  ├─ style.js
│     │  └─ __test__
│     │     ├─ Products.test.js
│     │     └─ __snapshots__
│     │        └─ Products.test.js.snap
│     └─ Splash
│        ├─ Splash.js
│        ├─ style.js
│        └─ __test__
│           ├─ Splash.test.js
│           └─ __snapshots__
│              └─ Splash.test.js.snap
└─ __mocks__
   └─ @react-native-masked-view
      └─ masked-view.js

```

- `assets` images, fonts, ...etc
- `components` All components should be in one folder, with no nesting!
- `context` All context Apis should be in one folder, with no nesting!.
- `hooks` All hooks should be in one folder, with no nesting! Each hook is refered to component or screen.
- `lib`
- `screens` A screen is what simply what get passed to navigator, Each screen has its own folder, it contains the jsx screen itself as well as styles, tests, ...etc.

## Stack
This app is built with react-native cli, `react-navigation`, `@react-native-masked-view/masked-view`, `axios`,`react-native-linear-gradient`, `react-native-vector-icons`, React-Testing-Library & Jest for testing.`

## UI Design

This app is built following [Figma Design](https://www.figma.com/file/3wlQFO3dkD6BwUoudFlH2H/Product-Catalog-Mobile-App?node-id=38%3A504) Specifications.

And is completely responsive and adapts well to all viewports.