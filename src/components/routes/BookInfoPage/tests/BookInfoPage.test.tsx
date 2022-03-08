import React from 'react';
import { render } from '@testing-library/react';

import BookInfoPage from '../BookInfoPage';
import { MemoryRouter } from 'react-router-dom';

const testId = 'testingBookInfoPage';

type BookInfoPageProps = React.ComponentProps<typeof BookInfoPage>;

const renderComponent = (props: BookInfoPageProps = {}) => render(
  <MemoryRouter>
    <BookInfoPage
      data-testid={testId}
      {...props}
    />
  </MemoryRouter>,
);

describe('Компонент BookInfoPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
