import React from 'react';
import { render } from '@testing-library/react';

import BookTile from '../BookTile';
import { MemoryRouter } from 'react-router-dom';

const testId = 'testingBookTile';

type BookTileProps = React.ComponentProps<typeof BookTile>;

const renderComponent = (props: BookTileProps = {}) => render(
  <MemoryRouter>
    <BookTile
      data-testid={testId}
      {...props}
    />
  </MemoryRouter>,
);

describe('Компонент BookTile', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
