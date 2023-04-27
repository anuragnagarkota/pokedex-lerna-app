import "@testing-library/jest-dom";
import { queryByAttribute, render, screen } from "@testing-library/react";

import { PokemonCard } from "components";

const obj = { name: "pokemon", height: 10, weight: 20 };
it("should render", () => {
  const { getByPlaceholderText } = render(<PokemonCard {...obj} />);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

it("props rendered correctly", () => {
  const { getByPlaceholderText } = render(<PokemonCard {...obj} />);
  screen.getByRole("table");
  expect(screen.getByText(/pokemon/i)).toBeInTheDocument();
});
