import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactMeSection from "./ContactMeSection";
import { AlertProvider } from "../context/alertContext";
import { act } from 'react-dom/test-utils';

describe("the Contact Me form", () => {
  
  test("renders", () => {
    render(
      <AlertProvider>
        <ContactMeSection />
      </AlertProvider>
    );

    expect(screen.getByRole("heading", { name: /Contact me/i }))
      .toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /name/i }))
      .toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i }))
      .toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: /type/i }))
      .toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /message/i }))
      .toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i }))
      .toBeInTheDocument();    
  });

  test("submits a valid form", async () => {
    const handleSubmit = jest.fn()
    render(
      <AlertProvider>
        <ContactMeSection onSubmit={handleSubmit} />
      </AlertProvider>
    );
    const user = userEvent.setup();

    await user.type(screen.getByRole("textbox", {name: /name/i}), 'John');
    await user.type(screen.getByRole("textbox", {name: /email/i}), 'johndoe@example.com');
    await user.type(screen.getByRole("textbox", {name: /message/i}), 'This message is supposed to be a least twenty characters long. Or maybe a bit longer');

    await user.click(screen.getByRole("button", {name: /submit/i}));

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        email: 'johndoe@example.com',
        type: 'hireMe',
        comment: 'This message is supposed to be a least twenty characters long. Or maybe a bit longer', 
      });
    });
  });

  test("throws an error on invavlid inputs", async () => {
    render(
      <AlertProvider>
        <ContactMeSection />
      </AlertProvider>
    );

    fireEvent.change(screen.getByRole("textbox", {name: /email/i}), { target: { value: 'invavlidemail' } });
    fireEvent.change(screen.getByRole("textbox", {name: /message/i}), { target: { value: 'Ths msg shrt' } });

    await act( async () => {
      fireEvent.click(screen.getByRole("button", {name: /submit/i}));
    });

    expect(screen.getByText(/Please write your name/i))
      .toBeInTheDocument();
    expect(screen.getByText(/Please write a valid email/i))
      .toBeInTheDocument();
    expect(screen.getByText(/Please give more details/i))
      .toBeInTheDocument();
  });
});