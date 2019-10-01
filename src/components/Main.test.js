import React from "react";
import { render, cleanup } from "@testing-library/react";

import Main from "./Main";

afterEach(cleanup);

describe("Footer component", () => {
  const movies = [
    {
      acf: {
        release_year: "2015",
        rating: "4.3",
        description: "<p>Something about Star Wars Episode VII</p>"
      },
      title: { rendered: "Star Wars: Episode VII — The Force Awakens" }
    },
    {
      acf: {
        release_year: "1983",
        rating: "4.8",
        description: "<p>Something about Star Wars Episode VI</p>"
      },
      title: { rendered: "Star Wars: Episode VI — Return of the Jedi" }
    }
  ];
  test("Renders correctly", () => {
    const { container } = render(<Main movies={movies} />);
    expect(container).toMatchSnapshot();
  });
});
