import React from "react";
import { render, cleanup } from "@testing-library/react";

import Main from "./Main";

afterEach(cleanup);

describe("Footer component", () => {
  test("Renders correctly", () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });
});
