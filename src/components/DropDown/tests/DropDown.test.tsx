import React from 'react';
import { render } from '@testing-library/react';

import DropDown from '../DropDown';

const testId = 'testingDropDown';

type DropDownProps = React.ComponentProps<typeof DropDown>;

const renderComponent = (props: DropDownProps = {
  label: 'Categories',
  value: 'all',
  onChange: (event: React.FormEvent) => {},
  list: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']}) => render(
  <DropDown
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент DropDown', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
