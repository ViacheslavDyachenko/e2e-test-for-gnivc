import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

const testId = 'testingHeader';

type HeaderProps = React.ComponentProps<typeof Header>;

const renderComponent = (props: HeaderProps = {}) => render(
  <Header
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Header', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
