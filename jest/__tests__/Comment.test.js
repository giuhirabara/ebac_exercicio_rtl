import { render, fireEvent } from '@testing-library/react'
import CommentForm from './CommentForm'

test('Teste de inserção de comentários e uso do "data-testid"', () => {
  const handleSubmit = jest.fn()

  const { getByTestId } = render(<CommentForm onSubmit={handleSubmit} />)

  const inputElement = getByTestId('comment-input')

  fireEvent.change(inputElement, { target: { value: 'Primeiro comentário' } })
  fireEvent.submit(getByTestId('comment-submit'))

  expect(handleSubmit).toHaveBeenCalledWith('Primeiro comentário')

  fireEvent.change(inputElement, { target: { value: 'Segundo comentário' } })
  fireEvent.submit(getByTestId('comment-submit'))

  expect(handleSubmit).toHaveBeenCalledWith('Segundo comentário')
})