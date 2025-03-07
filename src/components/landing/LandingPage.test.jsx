import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from './LandingPage';

describe('LandingPage Component', () => {
  test('renders the landing page header', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const headerText = screen.getByText(/The best way/i);
    expect(headerText).toBeInTheDocument();
  });

  test('renders the SkillsAssess logo', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const logoText = screen.getByText(/SkillsAssess/i);
    expect(logoText).toBeInTheDocument();
  });

  test('renders the call to action button', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const ctaButton = screen.getByText(/Create an Account/i);
    expect(ctaButton).toBeInTheDocument();
  });

  test('renders the trusted by text', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const trustedByText = screen.getByText(
      /Trusted by top universities and industries/i
    );
    expect(trustedByText).toBeInTheDocument();
  });

  test('renders the navbar', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    const aboutUsLink = screen.getByText(/About Us/i);
    expect(aboutUsLink).toBeInTheDocument();
  });
});
