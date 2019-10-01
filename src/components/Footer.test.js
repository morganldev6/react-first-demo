import React from "react";
import { render, cleanup } from "@testing-library/react";

import Footer from "./Footer";

afterEach(cleanup);

describe("Footer component", () => {
  test("Renders correctly", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
