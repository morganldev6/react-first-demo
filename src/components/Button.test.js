import React from "react";
import { render, cleanup } from "@testing-library/react";

import Button from "./Button";

afterEach(cleanup);

describe("Button to display movie description", () => {
  test("Renders correctly", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
