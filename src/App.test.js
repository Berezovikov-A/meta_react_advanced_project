import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    expect(screen.getByRole("textbox", {name: /name/i}))
      .toBeInTheDocument();
    expect(screen.getByRole("textbox", {name: /email/i}))
      .toBeInTheDocument();
    expect(screen.getByRole("combobox", {name: /type/i}))
      .toBeInTheDocument();
    expect(screen.getByRole("textbox", {name: /message/i}))
      .toBeInTheDocument();
    expect(screen.getByRole("button", {name: /submit/i}))
      .toBeInTheDocument();    
  });

  test("Testing submition with valid values", async () => {
    const handleSubmit = jest.fn()
    render(
      <AlertProvider>
        <ContactMeSection onSubmit={handleSubmit} />
      </AlertProvider>
    );
    const user = userEvent.setup();

    await user.type(screen.getByRole("textbox", {name: /name/i}), 'John');
    await user.type(screen.getByRole("textbox", {name: /email/i}), 'johndoe@example.com');
    await user.type(screen.getByRole("textbox", {name: /message/i}), 'This memssage is supposed to be a least twenty characters long. Or maybe a bit longer');

    await user.click(screen.getByRole("button", {name: /submit/i}));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        email: 'johndoe@example.com',
        type: 'hireMe',
        comment: 'This memssage is supposed to be a least twenty characters long. Or maybe a bit longer', 
      });
    });
  });
});