import { useReducer } from "react";
import { BookingForm } from "./BookingForm";
import { Header } from "./Header";
import { Footer } from "./Footer";

// Reducer function to manage state updates for available times
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return initializeTimes();
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

// Function to initialize available times
const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

export const Booking = () => {
  // Initialize availableTimes state using useReducer
  const [availableTimes, availableTimesDispatch] = useReducer(availableTimesReducer, [], initializeTimes);

  // Function to handle reservation submission
  const handleReservation = (event) => {
    event.preventDefault();
    // Implement reservation logic here
    console.log("Reservation submitted");
  };

  return (
    <>
      <Header/>
      <BookingForm 
        handleReservation={handleReservation} 
        availableTimesDispatch={availableTimesDispatch} 
      />
      <Footer/>
    </>
  );
};
