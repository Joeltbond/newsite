/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { injectGlobal } from 'styled-components';

import { Button, Welcome } from '@storybook/react/demo';

import Main from '../components/Main';
import Row from '../components/Row';
import Column from '../components/Column';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));

storiesOf('Grid', module).add('default', () => {
  const backgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.2)' };
  const marginBottom = { marginBottom: 12 };
  const contentStyle = { ...backgroundStyle, minHeight: 60 };

  injectGlobal`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
  `;

  return (
    <Main style={{ ...backgroundStyle, minHeight: '100vh' }}>
      <Row style={{ ...backgroundStyle, ...marginBottom }}>
        <Column style={{ ...backgroundStyle }} spanSmall={12}>
          <div style={{ ...contentStyle }} />
        </Column>
      </Row>
      <Row style={{ ...backgroundStyle, ...marginBottom }}>
        <Column style={{ ...backgroundStyle }} spanSmall={6}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={6}>
          <div style={{ ...contentStyle }} />
        </Column>
      </Row>
      <Row style={{ ...backgroundStyle, ...marginBottom }}>
        <Column style={{ ...backgroundStyle }} spanSmall={4}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={4}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={4}>
          <div style={{ ...contentStyle }} />
        </Column>
      </Row>
      <Row style={{ ...backgroundStyle, ...marginBottom }}>
        <Column style={{ ...backgroundStyle }} spanSmall={3}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={3}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={3}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={3}>
          <div style={{ ...contentStyle }} />
        </Column>
      </Row>
      <Row style={{ ...backgroundStyle, ...marginBottom }}>
        <Column style={{ ...backgroundStyle }} spanSmall={2}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={2}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={2}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={2}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={2}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={2}>
          <div style={{ ...contentStyle }} />
        </Column>
      </Row>
      <Row style={{ ...backgroundStyle }}>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
        <Column style={{ ...backgroundStyle }} spanSmall={1}>
          <div style={{ ...contentStyle }} />
        </Column>
      </Row>
    </Main>
  );
});
