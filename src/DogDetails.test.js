import React from "react";
import DogDetails from "./DogDetails";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";


const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: "whiskey",
    key: "fjs",
    facts: [
      "loves to play fetch", "wants to eat everything"
    ]
  },
  {
    name: "Bob",
    age: 3,
    src: "bob",
    key: "weo",
    facts: [
      "loves bacon treats", "hates cats"
    ]
  }
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ name: "Whiskey"}),
}))


describe("DogDetails", function () {
  it("renders without crashing", function () {
    render(
      <MemoryRouter initialEntries={["/dogs/Whiskey"]}>
        <DogDetails dogs={dogs} />
      </MemoryRouter>
    );
  });

  it("renders the correct dog info", function(){
    const { queryByText, container, debug } = render(
      <MemoryRouter >
        <DogDetails dogs={dogs} />
      </MemoryRouter>
    );

    debug(container);

    expect(queryByText("Whiskey")).toBeInTheDocument();
    expect(queryByText("loves to play fetch")).toBeInTheDocument();
    expect(queryByText("wants to eat everything")).toBeInTheDocument();
    expect(queryByText("hates cats")).not.toBeInTheDocument();
    expect(queryByText("Bob")).not.toBeInTheDocument();
  });

});