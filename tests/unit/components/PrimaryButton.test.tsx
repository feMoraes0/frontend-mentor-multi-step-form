import { describe, expect, it, vi } from 'vitest';
import PrimaryButton from '../../../src/components/PrimaryButton';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Given the PrimaryButton component', () => {
  it('Then should find the element using button as role', async () => {
    render(<PrimaryButton>Testing</PrimaryButton>);
    const button = await screen.findByRole('button');
    expect(button).toBeDefined();
  });

  it('Then should the children passed as label', async () => {
    const children = 'any_text';
    render(<PrimaryButton>{children}</PrimaryButton>);
    const button = await screen.findByRole('button');
    expect(button).toHaveTextContent(children);
  });

  describe('When the button is clicked', () => {
    it('Then should trigger onClick props function once', async () => {
      const mockFunction = vi.fn();
      render(<PrimaryButton onClick={mockFunction}>Testing</PrimaryButton>);
      const button = await screen.findByRole('button');
      await userEvent.click(button);
      expect(mockFunction).toHaveBeenCalledOnce();
    });
  });
});
