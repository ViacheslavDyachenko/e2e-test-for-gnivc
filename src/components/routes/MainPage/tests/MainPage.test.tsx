import React from 'react';
import { render } from '@testing-library/react';

import MainPage from '../MainPage';
import { MemoryRouter } from 'react-router-dom';

const testId = 'testingMainPage';

type MainPageProps = React.ComponentProps<typeof MainPage>;

const renderComponent = (props: MainPageProps = {}) => render(
  <MemoryRouter>
    <MainPage
      data-testid={testId}
      {...props}
    />
  </MemoryRouter>,
);

describe('Компонент MainPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
