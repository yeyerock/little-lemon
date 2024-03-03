import React, { useReducer } from "react";
import { BookingForm } from "./BookingForm";

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
    <div>
      {/* Render the BookingForm component with availableTimes state and dispatch function */}
      <BookingForm 
        handleReservation={handleReservation} 
        availableTimesDispatch={availableTimesDispatch} 
      />
    </div>
  );
};
