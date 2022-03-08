import React from 'react';
import { render } from '@testing-library/react';

import SearchButton from '../SearchButton';

const testId = 'testingSearchButton';

type SearchButtonProps = React.ComponentProps<typeof SearchButton>;

const renderComponent = (props: SearchButtonProps = {}) => render(
  <SearchButton
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SearchButton', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
