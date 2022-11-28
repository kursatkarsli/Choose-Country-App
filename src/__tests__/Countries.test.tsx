import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("DOM elements testing", () => {
  test("renders Country Search App as a Text", () => {
    render(<App />);

    const title = screen.getByText(/Country Search App/i);
    expect(title).toBeInTheDocument();
  });

  test("Is search Input Exists", () => {
    render(<App />);

    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();
  });
  test("Is Table Exist", () => {
    render(<App />);

    const dataTable = screen.getByTestId("DataTable");
    expect(dataTable).toBeInTheDocument();
  });
  test("Is Input Label Correct", () => {
    render(<App />);

    const inputLabel = screen.getByLabelText("Country Code");
    expect(inputLabel).toBeInTheDocument();
  });
});
