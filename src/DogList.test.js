import React from "react";
import DogList from "./DogList";
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


describe("DogList", function () {
  it("renders without crashiong", function () {
    render(
      <MemoryRouter>
        <DogList dogs={dogs} />
      </MemoryRouter>
    );
  });

  it("renders the list of dogs", function(){
    const { queryByText } = render(
      <MemoryRouter>
        <DogList dogs={dogs} />
      </MemoryRouter>
    );

    expect(queryByText("Bob")).toBeInTheDocument();
    expect(queryByText("Whiskey")).toBeInTheDocument();
    expect(queryByText("loves bacon treats")).toBeInTheDocument();
    expect(queryByText("hates cats")).toBeInTheDocument();
  });

});