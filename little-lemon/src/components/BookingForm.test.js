import { render, screen } from "@testing-library/react";
import BookingForm, { initializeTimes, updateTimes } from './BookingForm'; // Asegúrate de exportar las funciones desde BookingForm

describe('initializeTimes function', () => {
  test('returns the correct expected value', () => {
    // Ejecutar la función initializeTimes
    const times = initializeTimes();
    
    // Verificar que devuelve el valor esperado
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ]);
  });
});

describe('updateTimes function', () => {
  test('returns the same value as provided in the state', () => {
    // Definir un estado de ejemplo
    const currentState = [
      "10:00",
      "11:00",
      "12:00"
    ];

    // Ejecutar la función updateTimes con el estado de ejemplo
    const updatedTimes = updateTimes(currentState);
    
    // Verificar que devuelve el mismo valor proporcionado en el estado
    expect(updatedTimes).toEqual(currentState);
  });
});

describe('BookingForm component', () => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });
});