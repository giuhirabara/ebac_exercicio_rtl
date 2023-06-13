test('renders two comments', () => {
  render(<App />);
  const commentInput = screen.getByTestId('comment-input');
  const commentButton = screen.getByTestId('comment-button');

  fireEvent.change(commentInput, { target: { value: 'Comment 1' } });
  fireEvent.click(commentButton);

  fireEvent.change(commentInput, { target: { value: 'Comment 2' } });
  fireEvent.click(commentButton);

  const comment1 = screen.getByText('Comment 1');
  const comment2 = screen.getByText('Comment 2');

  expect(comment1).toBeInTheDocument();
  expect(comment2).toBeInTheDocument();
});
