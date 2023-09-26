# A Button

This is a sample project showing off various test scenarios for a simple react app consisting of one component with an app wrapper (no hooks yet). 
Clone it, then start playing. Change tests, add tests, add more components or a hook. Test what feels good, then implement that in your own projects. 

## Making it run

1. clone this repository to your machine

2. `yarn`

3. `yarn start`

## What can I find here? 
### Unit test
As framework running all non-e2e tests we use [Jest](https://jestjs.io/docs/tutorial-react). There are a lot of other contenders ([Mocha](https://medium.com/@tatismolin/testing-your-react-app-with-mocha-chai-and-other-beverages-e9a16ca7b9bb), [Vitest](https://vitest.dev/), ...), but Jest seems to be the de-facto standard for now. ***If you expect to spend a lot of time searching for how to do things and want to actually find solutions, use Jest***. 

### Component test
A component test is a unit test that renders a component and then works with the DOM, so you can actually see what the browser, in theory, would see. We use the [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) to help us render the component we want to test. 

### Snapshot test
A [snapshot test](https://jestjs.io/docs/snapshot-testing) takes (on the first run) a snapshot of the DOM and puts it in a somewhat readable format. Subsequent runs compare the first snapshot to the is-state of the component and fail if they detect a difference. 

### Component a11y test
We use [axe-core](https://github.com/dequelabs/axe-core) to test basic accessibility for our button component. Note that this is by no means exhaustive, but any automated test is better than none. 

### E2E test
Usually, an end-to-end test means that the entire interaction between app and server is tested. This app does not use a server. What I mean by e2e in this context is "we render the page in a browser and click, then assert on what is shown in the browser". There are a number of tools and libraries which can support this (most notable are [Selenium](https://www.selenium.dev/) and [Cypress](https://www.cypress.io/)). We decided on [Playwright](https://playwright.dev/), mostly because of the fancy ui, stability, and the fact that we like to write everything in typescript. 

Also, BDD deserves an honorable mention: It is customary to formulate E2E tests in [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) style. The tool you need for that is [Cucumber](https://cucumber.io/), which can be used together with most modern e2e testing tools to provide your POs with human-readable tests.

### E2E screenshot test
An e2e screenshot test is what it says. Run the app, navigate to the page, take a screenshot, and compare it to the last run. Fail if anything changed.

### E2E a11y test
Axe-core (as mentioned above) has a [plugin for e2e tests](https://www.npmjs.com/package/@axe-core/playwright), which will test the accessibility of the entire page. Note, however

1. It will only test the pages you point it to
2. It will only find about 30% of accessibility errors in the first place. Make sure to check for the rest.

## The only testing metric you need
Before you consider which tests to write, ask yourself: 

>What do I need to do to be comfortable deploying this code change to production?

## What can I not find here (yet)?
### Testing hooks with react-testing-library
React-testing-library [can render hooks](https://vaskort.medium.com/how-to-unit-test-your-custom-react-hook-with-react-testing-library-and-jest-8bdefafdc8a2) just as it can render components. 

### Mocking hooks
Jest and react-testing-library can [mock hooks](https://plainenglish.io/blog/mock-your-hooks-to-make-testing-simpler-d405ed4cf30b). If you find yourself needing to do that for every single test, consider refactoring your architecture (for example to a hexagonal architecture). 
Do not ever mock react-hooks like `useState` or `useMemo`. State changes should be reflected by the UI of your component, test that instead.

### Mockserver
You can catch server calls with, e. g., [nock](https://github.com/nock/nock), [mock-server](https://www.mock-server.com/)and a number of other tools.

### Mutation testing
You can randomly change code and see if your tests still catch the error. This will show you the quality of the tests. The tool of choice for this is called [Stryker](https://stryker-mutator.io/).

### PACT testing
[PACT](https://docs.pact.io/) testing (aka contract testing) is used to secure the interface between client and server. You write down your API calls in JSON, and both sides generate unit tests to see whether they consume and produce the correct requests according to the specification. This can be very useful if you're building an API with a lot of different consumers.

### ...
There's so much more here. Use whatever makes you feel safe. If I forgot something important, feel free to open a PR. 
