import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../src/components/booking-form/BookingForm';
import Navbar from '../src/components/navbar/Navbar';

test('renders app', () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

describe('MyForm', () => {
  it('submits form correctly', () => {
    render(<BookingForm />);
    const input = screen.getByLabelText('firstName');
    fireEvent.change(input, { target: { value: 'John' } });

    fireEvent.click(screen.getByText('Make Your Reservation'));

    expect(input.value).toBe('John');
  });
});