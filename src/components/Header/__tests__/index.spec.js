import React from "react";
import renderer from "react-test-renderer";

import Header from "../index";
import Heading from "../Heading";

describe("Header", () => {
  it("renders with default", () => {
    const component = renderer.create(
      <Header>
        <Heading>
          <Heading.Strong>Generic</Heading.Strong>{" "}
          <Heading.Span>Header</Heading.Span>
        </Heading>
      </Header>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders withOverlay", () => {
    const component = renderer.create(
      <Header withOverlay>
        <Heading>
          <Heading.Strong>Generic</Heading.Strong>{" "}
          <Heading.Span>Header</Heading.Span>
        </Heading>
      </Header>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with custom level", () => {
    const component = renderer.create(
      <Header>
        <Heading level={1} color="blue">
          <Heading.Strong>Generic</Heading.Strong>{" "}
          <Heading.Span>Header</Heading.Span>
        </Heading>
      </Header>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders with custom level and monospace", () => {
    const component = renderer.create(
      <Header>
        <Heading level={1} color="blue" monospace>
          <Heading.Strong>Generic</Heading.Strong>{" "}
          <Heading.Span>Header</Heading.Span>
        </Heading>
      </Header>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
