import React from 'react';
import { render } from '@testing-library/react';

import BookInfo from '../BookInfo';

const testId = 'testingBookInfo';

type BookInfoProps = React.ComponentProps<typeof BookInfo>;

const renderComponent = (props: BookInfoProps = {}) => render(
  <BookInfo
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент BookInfo', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
