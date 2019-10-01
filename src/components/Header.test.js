import React from "react";
import { render, cleanup } from "@testing-library/react";

import Header from "./Header";

afterEach(cleanup);

describe("Footer component", () => {
  test("Renders correctly", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
