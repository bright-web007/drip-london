import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the navbar component correctly', () => {
    render(<Navbar />);

    // Check if the logo is rendered
    const logo = screen.getByAltText('Drip London Logo');
    expect(logo).toBeInTheDocument();

    // Check if the "Open Times" button is rendered
    const openTimesButton = screen.getByText('Open Times');
    expect(openTimesButton).toBeInTheDocument();

    // Check if the reservation section is rendered
    const reservation = screen.getByText('Reservation');
    expect(reservation).toBeInTheDocument();
  });

  it('displays the first open time by default', () => {
    render(<Navbar />);

    const firstTime = screen.getByText('Monday: Closed');
    expect(firstTime).toBeInTheDocument();
  });
});
