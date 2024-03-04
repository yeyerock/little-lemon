import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { App } from './App.jsx'
import { Booking } from './components/Booking.jsx';
import { ConfirmedBooking } from './components/ConfirmedBooking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/booking",
    element: <Booking/>,
  },
  {
    path: "/bookingconfirmation",
    element: <ConfirmedBooking/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
