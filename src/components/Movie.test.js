import React from "react";
import { render, cleanup } from "@testing-library/react";

import Movie from "./Movie";

afterEach(cleanup);

describe("Footer component", () => {
  test("Renders correctly", () => {
    const { container } = render(<Movie movie={{}} />);
    expect(container).toMatchSnapshot();
  });
});
