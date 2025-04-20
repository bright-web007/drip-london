import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders the footer component correctly', () => {
    render(<Footer />);

    const logo = screen.getByAltText('Drip London Logo');
    expect(logo).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    render(<Footer />);

    const navigationItems = ['HOME', 'THE MENU', 'ABOUT', 'BOOK AN EVENT', 'NEWS', 'CONTACT'];

    navigationItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('has the correct background color', () => {
    render(<Footer />);

    const footerContainer = screen.getByText('@Drip London Restaurant, London 2025').parentElement;
    expect(footerContainer).toHaveClass('bg-beige-500');
  });
});
