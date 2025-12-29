import "jest-canvas-mock";
import "@testing-library/jest-dom";

// Mock window.matchMedia for theme detection
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

// Mock colorthief to avoid sharp native module issues in tests
jest.mock("colorthief", () => {
  return class ColorThief {
    getColor() {
      return [100, 100, 100];
    }
    getPalette() {
      return [[100, 100, 100]];
    }
  };
});
