import React from "react";
import { render, cleanup } from "@testing-library/react";

import ContentBlock from "./ContentBlock";

afterEach(cleanup);

describe("ContentBlock shows each line item describing the movie", () => {
  test("Renders correctly", () => {
    const { container } = render(<ContentBlock />);
    expect(container).toMatchSnapshot();
  });
});
