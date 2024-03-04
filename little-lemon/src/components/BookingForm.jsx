import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ConfirmedBooking } from "./ConfirmedBooking";

const BookingFormSchema = Yup.object().shape({
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  guests: Yup.number()
    .required("Number of guests is required")
    .min(1, "Minimum guests is 1")
    .max(10, "Maximum guests is 10"),
  occasion: Yup.string().required("Occasion is required"),
});

export const BookingForm = ({ handleReservation, initializedTime }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    date: "",
    time: initializedTime || "",
    guests: 1,
    occasion: "",
  };

  return (
    <>
      <section id="booking">
        <div className="container">
          <h1 className="title">Book Now</h1>
          <div className="form_container">
            <Formik
              initialValues={initialValues}
              validationSchema={BookingFormSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleReservation(values);
                setIsModalOpen(true); 
                setTimeout(() => { 
                  setIsModalOpen(false);
                  setSubmitting(false);
                }, 3000); 
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label className="section_title" htmlFor="date">
                    Choose date
                  </label>
                  <Field
                    type="date"
                    id="date"
                    name="date"
                    className="input_field"
                    aria-label="Select date for reservation"
                  />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="error_message"
                  />
                  <label className="section_title" htmlFor="time">
                    Choose time
                  </label>
                  <Field
                    as="select"
                    id="time"
                    name="time"
                    className="input_field"
                    aria-label="Select time for reservation"
                  >
                    <option value="">Select time</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </Field>
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="error_message"
                  />
                  <label className="section_title" htmlFor="guests">
                    Number of guests
                  </label>
                  <Field
                    type="number"
                    id="guests"
                    name="guests"
                    className="input_field"
                    placeholder="1"
                    min="1"
                    max="10"
                    aria-label="Number of guests"
                  />
                  <ErrorMessage
                    name="guests"
                    component="div"
                    className="error_message"
                  />
                  <label className="section_title" htmlFor="occasion">
                    Occasion
                  </label>
                  <Field
                    as="select"
                    id="occasion"
                    name="occasion"
                    className="input_field"
                  >
                    <option value="">Select occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                  </Field>
                  <ErrorMessage
                    name="occasion"
                    component="div"
                    className="error_message"
                  />
                  <button
                    className="cta description"
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Submit reservation"
                  >
                    {isSubmitting ? "Submitting..." : "Make Your reservation"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
      <ConfirmedBooking
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
