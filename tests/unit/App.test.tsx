import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from '../../src/App';

describe("Testing...", () => {
  it("Then should do something", () => {
    render(<App />);
    screen.debug();
  });
});
