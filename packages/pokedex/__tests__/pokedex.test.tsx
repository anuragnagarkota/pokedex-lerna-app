import "@testing-library/jest-dom";
import {  render, screen } from "@testing-library/react";

import { PokemonCard } from "components";

const obj = { name: "pokemon", height: 10, weight: 20 };
it("should render", () => {
   render(<PokemonCard {...obj} />);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

it("props rendered correctly", () => {
  render(<PokemonCard {...obj} />);
  screen.getByRole("table");
  expect(screen.getByText(/pokemon/i)).toBeInTheDocument();
});
