"use client";

import "../styles/booking.css";
import SectionTitle from "../components/SectionTitle";
import { useState } from "react";

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  people: string;
  message: string;
};

const Booking = () => {
  const initialState: BookingForm = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  };

  const [text, setText] = useState<BookingForm>(initialState);
  const [status, setStatus] = useState("");
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setText((prev) => ({ ...prev, [name]: value }));
    setStatus("");
  };

  const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text.name || !text.email || !text.date || !text.time || !text.people) {
      setSubmitState("error");
      setStatus("Please fill out all required fields.");
      return;
    }

    try {
      setSubmitState("loading");
      setStatus("Sending your reservation request...");

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Failed to submit booking.");
      }

      setSubmitState("success");
      setStatus(
        "Your reservation request has been sent! We will contact you shortly.",
      );
      setText(initialState);
    } catch (error) {
      setSubmitState("error");
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle section="bookings" />

        <form
          onSubmit={handleSubmitBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="name"
                value={text.name}
                className="form-control"
                placeholder="Your Name"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="email"
                name="email"
                value={text.email}
                className="form-control"
                placeholder="Your Email"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group">
              <input
                type="text"
                name="phone"
                value={text.phone}
                className="form-control"
                placeholder="Your Phone Number"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
                name="date"
                value={text.date}
                className="form-control"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="time"
                name="time"
                value={text.time}
                className="form-control"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="number"
                name="people"
                value={text.people}
                className="form-control"
                placeholder="Number of People"
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-12 form-group mt-3">
              <textarea
                name="message"
                value={text.message}
                className="form-control"
                rows={5}
                placeholder="Additional requests or notes..."
                onChange={handleTextChange}
              />
            </div>

            {status && (
              <div className="col-lg-12 mt-3">
                <p
                  style={{
                    color:
                      submitState === "success"
                        ? "green"
                        : submitState === "error"
                          ? "#b23a48"
                          : "white",
                    fontWeight: 500,
                  }}
                >
                  {status}
                </p>
              </div>
            )}

            <div className="col-lg-12 text-center mt-4">
              <button
                type="submit"
                className="btn-book"
                disabled={submitState === "loading"}
              >
                {submitState === "loading" ? "Sending..." : "Book a Table"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
