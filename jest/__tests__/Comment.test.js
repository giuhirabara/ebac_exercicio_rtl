import { render, fireEvent } from '@testing-library/react';
import App from '../../src/App';

test('inserir dois comentários', () => {
  const { getByTestId, getByText } = render(<App />);

  const commentInput = getByTestId('comment-input');

  const submitButton = getByTestId('submit-button');

  fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(submitButton);

  const comment1 = getByText('Primeiro comentário');
  expect(comment1).toBeInTheDocument();

  fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
  fireEvent.click(submitButton);

  const comment2 = getByText('Segundo comentário');
  expect(comment2).toBeInTheDocument();
});