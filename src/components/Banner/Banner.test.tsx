import React from "react";
import { render } from "@testing-library/react";
import Banner from "./Banner";

test("renders learn react link", () => {
  const { getByText } = render(
    <Banner title="this is a title" description="this is a description" />
  );
  const linkElement = getByText(/this is a title/i);
  expect(linkElement).toBeInTheDocument();
});
