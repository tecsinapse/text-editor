import React from 'react';
import { storiesOf } from '@storybook/react';

import { DivFlex } from '@tecsinapse/ui-kit/build/withFlexCenter';
import { EditText } from './EditText';

storiesOf(`Text Editor`, module)
  .addDecorator(story => <DivFlex>{story()}</DivFlex>)
  .add('Editor', () => (
    <div style={{ width: '700px', height: '500px' }}>
      <EditText onChange={e => e /* console.log(e) */} error="" />
    </div>
  ));
