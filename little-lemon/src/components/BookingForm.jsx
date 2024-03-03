import React, { useReducer } from "react";

// Reducer function to manage state updates
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return initializeTimes();
    case "UPDATE_TIMES":
      return updateTimes(action.payload);
    default:
      return state;
  }
};

// Function to initialize available times
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Function to update available times based on selected date
const updateTimes = (selectedDate) => {
  // For now, return the same available times regardless of the date
  return initializeTimes();
};

export const BookingForm = ({ handleReservation, availableTimesDispatch }) => {
  // Initialize availableTimes state using useReducer
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  // Handle date change and update available times
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const updatedTimes = updateTimes(selectedDate);
    availableTimesDispatch({ type: "UPDATE_TIMES", payload: updatedTimes });
  };

  return (
    <>
      <h1>Book Now</h1>
      <form
        onSubmit={handleReservation}
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          onChange={handleDateChange}
          aria-label="Select date for reservation"
          aria-describedby="date-description"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          onChange={(e) =>
            dispatch({ type: "SELECT_TIME", payload: e.target.value })
          }
          aria-label="Select time for reservation"
        >
          {/* Render options dynamically from availableTimes state */}
          {availableTimes.map((timeOption, index) => (
            <option key={index}>{timeOption}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          aria-label="Number of guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input
          type="submit"
          value="Make Your reservation"
          aria-label="Submit reservation"
        />
      </form>
    </>
  );
};
