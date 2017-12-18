/* eslint import/no-extraneous-dependencies: 0 */
import { storiesOf } from '@storybook/react';
import grid from './grid';

storiesOf('Grid', module)
  .add('default', grid())
  .add('callapse on mobile', grid(true));
