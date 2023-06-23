import { render, screen } from '@testing-library/react';
import ProjectsSection from "./ProjectsSection";
import projects from "../assets/data/projects.json";


describe("the Projects Section", () => {
    test("displays grid with each project rendered in a card widget", () => {
      render(<ProjectsSection />);
  
      projects.forEach(({title, description}) => {
        expect(screen.getByRole("heading", { name: title }))
          .toBeInTheDocument();
        expect(screen.getByText(description ))
          .toBeInTheDocument();
      })
    });
  });