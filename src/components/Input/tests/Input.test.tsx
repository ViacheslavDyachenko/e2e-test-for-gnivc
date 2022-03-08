import React from 'react';
import { render } from '@testing-library/react';

import Input from '../Input';

const testId = 'testingInput';

type InputProps = React.ComponentProps<typeof Input>;

const renderComponent = (props: InputProps = {}) => render(
  <Input
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Input', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
