import React from 'react';
import { render } from '@testing-library/react';

import ActionButton from '../ActionButton';

const testId = 'testingActionButton';

type ActionButtonProps = React.ComponentProps<typeof ActionButton>;

const renderComponent = (props: ActionButtonProps = {}) => render(
  <ActionButton
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ActionButton', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
