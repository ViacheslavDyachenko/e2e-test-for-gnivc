import React from 'react';
import { render } from '@testing-library/react';

import AboutProject from '../AboutProject';

const testId = 'testingAboutProject';

type AboutProjectProps = React.ComponentProps<typeof AboutProject>;

const renderComponent = (props: AboutProjectProps = {}) => render(
  <AboutProject
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент AboutProject', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
