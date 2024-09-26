/*
 * Code and configuration here executes before each test suite and immediately
 * after the test framework has been installed in the environment.
 *  - See Docs: https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
 */
import { expect, vi } from "vitest";

import * as matchers from "@testing-library/jest-dom/matchers";
import { setLogger } from "react-query";

(global as any).jest = vi;
expect.extend(matchers);
(window as any).scrollTo = vi.fn();

// Setup global mock for window.matchMedia() which is not implemented in JSDOM
// `window.matchMedia is undefined` is a common bug if you ever try to do
// responsive stuff in JS that is executed in Jest unit tests.
window.matchMedia = vi.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
});

class Worker {
  url: string;
  onmessage: any;

  constructor(stringUrl: string) {
    this.url = stringUrl;
    this.onmessage = () => {};
  }
  postMessage(msg: string) {
    this.onmessage(msg);
  }
  terminate() {}
}

window.Worker = Worker as any;

window.URL.createObjectURL = vi.fn();

(window as any).FS = {
  setUserVars: vi.fn(),
};

// https://tanstack.com/query/v3/docs/react/guides/testing#turn-off-network-error-logging
setLogger({
  log: console.log,
  warn: console.warn,
  // no more errors on the console
  error: () => {},
});

module.exports = {};
