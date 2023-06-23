import { render, screen } from '@testing-library/react';
import Header from './Header';
import Socials from "../assets/data/socials.json"

describe("The header", () => {

    test("has external links that take you to different social apps", () => {
      render(<Header />);
  
      expect(screen.getByTestId("mailto"))
        .toHaveAttribute('href', expect.stringMatching(/mailto/i));
    
      Socials.forEach(({brand, url}) => {
        expect(screen.getByTestId(brand))
          .toHaveAttribute('href', url);
      });  
    });
  
    test("has internal links", () => {
      render(<Header />);
  
      expect(screen.getByRole("link", {name: /projects/i}))
        .toHaveAttribute('href', "/#projects");
      expect(screen.getByRole("link", {name: /contact me/i}))
        .toHaveAttribute('href', "/#contact-me");
      
    });
  
  });