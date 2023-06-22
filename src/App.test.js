import { render, screen } from '@testing-library/react';
import ContactMeSection from "./components/ContactMeSection";
import { AlertProvider } from './context/alertContext';
import * as React from "react";

describe("Contact Form", () => {
  test("Renders the heading and all the form fields", () => {
    render(
      <AlertProvider>
        <ContactMeSection />
      </AlertProvider>
    );
    expect(screen.getByRole("heading", {name: /Contact me/i}))
      .toBeInTheDocument();
    expect(screen.getByLabelText(/name/i))
      .toBeInTheDocument();
    expect(screen.getByLabelText(/email/i))
      .toBeInTheDocument();
    expect(screen.getByLabelText(/type/i))
      .toBeInTheDocument();
    expect(screen.getByLabelText(/message/i))
      .toBeInTheDocument();
    expect(screen.getByRole("button"))
      .toBeInTheDocument();    
  });
});