import { describe, expect, it, vi } from 'vitest';
import Button from '../../../src/components/Button';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Given the Button component', () => {
  it('Then should find the element using button as role', async () => {
    render(<Button>Testing</Button>);
    const button = await screen.findByRole('button');
    expect(button).toBeDefined();
  });

  it('Then should the children passed as label', async () => {
    const children = 'any_text';
    render(<Button>{children}</Button>);
    const button = await screen.findByRole('button');
    expect(button).toHaveTextContent(children);
  });

  describe('When the button is clicked', () => {
    it('Then should trigger onClick props function once', async () => {
      const mockFunction = vi.fn();
      render(<Button onClick={mockFunction}>Testing</Button>);
      const button = await screen.findByRole('button');
      await userEvent.click(button);
      expect(mockFunction).toHaveBeenCalledOnce();
    });
  });
});
