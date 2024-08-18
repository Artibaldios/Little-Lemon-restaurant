
import { render, screen } from '@testing-library/react';
import BookingForm from "./BookingForm";
import { submitAPI, fetchAPI, initializeTimes, updateTimes  } from "../../pages/booking-page/BookingPage";

describe("BookingForm", () => {
  test("Renders labels and fields", () => {
    render(
      <BookingForm
        availableTimes={{
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        }}
        dispatch={jest.fn((action) => action)}
      />
    );
    // Date label and field
    const choseDateLabel = screen.getByText("Choose date");
    expect(choseDateLabel).toBeInTheDocument();
    const choseDateField = screen.getByTestId("res-date");
    expect(choseDateField).toBeInTheDocument();

    const choseTimeLabel = screen.getByText("Choose time");
    expect(choseTimeLabel).toBeInTheDocument();
    const choseTimeField = screen.getByTestId("res-time");
    expect(choseTimeField).toBeInTheDocument();

    const numberGuestLabel = screen.getByText("Number of guests");
    expect(numberGuestLabel).toBeInTheDocument();
    const numberGuestField = screen.getByTestId("guests");
    expect(numberGuestField).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
    const occasionField = screen.getByTestId("occasion");
    expect(occasionField).toBeInTheDocument();

    const submitButton = screen.getByDisplayValue("Make Your reservation");
    expect(submitButton).toBeInTheDocument();
  });

});