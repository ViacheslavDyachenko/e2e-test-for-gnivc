import React from 'react';
import { render } from '@testing-library/react';

import BookList from '../BookList';
import { MemoryRouter } from 'react-router-dom';

const testId = 'testingBookList';

type BookListProps = React.ComponentProps<typeof BookList>;

const renderComponent = (props: BookListProps = {}) => render(
  <MemoryRouter>
    <BookList
      data-testid={testId}
      {...props}
    />
  </MemoryRouter>,
);

describe('Компонент BookList', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
