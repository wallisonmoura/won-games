import 'next-image.mock'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import dotenv from 'dotenv'

dotenv.config({
  path: '.env.development'
})

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning: ReactDOM.render is no longer supported in React 18./.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
