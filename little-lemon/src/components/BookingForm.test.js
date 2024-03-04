import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para tener acceso a los métodos toBeInTheDocument, etc.
import { BookingForm } from './BookingForm';

describe('BookingForm', () => {
  test('renders all form fields', () => {
    const { getByLabelText } = render(<BookingForm />);

    expect(getByLabelText('Choose date')).toBeInTheDocument();
    expect(getByLabelText('Choose time')).toBeInTheDocument();
    expect(getByLabelText('Number of guests')).toBeInTheDocument();
    expect(getByLabelText('Occasion')).toBeInTheDocument();
  });

  test('submits the form with valid data', async () => {
    const handleReservation = jest.fn();
    const { getByLabelText, getByText } = render(
      <BookingForm handleReservation={handleReservation} />
    );

    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2022-12-31' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    fireEvent.click(getByText('Make Your reservation'));

    await waitFor(() =>
      expect(handleReservation).toHaveBeenCalledWith({
        date: '2022-12-31',
        time: '18:00',
        guests: '4',
        occasion: 'Birthday'
      })
    );
  });
});
