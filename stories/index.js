/* eslint import/no-extraneous-dependencies: 0 */
import { storiesOf } from '@storybook/react';
import grid from './grid';
import typography from './typography';

storiesOf('Grid', module)
  .add('default', grid())
  .add('callapse on mobile', grid(true));

storiesOf('Typography', module)
  .add('default', typography);
