import React from "react";
import { render, cleanup } from "@testing-library/react";

import Movie from "./Movie";

afterEach(cleanup);

describe("Footer component", () => {
  const movie = {
    acf: {
      release_year: "2015",
      rating: "4.3",
      description: "<p>Something about Star Wars Episode VII</p>"
    },
    title: { rendered: "Star Wars: Episode VII — The Force Awakens" }
  };

  test("Renders correctly", () => {
    const { container } = render(<Movie movie={movie} />);
    expect(container).toMatchSnapshot();
  });
});
