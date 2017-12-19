import React from 'react';
import { injectGlobal } from 'styled-components';

import { fonts } from '../style-utils/constants';

import Main from '../components/Main';
import Row from '../components/Row';
import Column from '../components/Column';

export default collapse => () => {
  /* eslint no-unused-expressions: 0,
  react/no-array-index-key: 0 */
  const backgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.2)' };
  const contentStyle = {
    ...backgroundStyle,
    color: 'white',
    fontFamily: fonts.georgia,
    fontSize: 10,
    padding: 6,
    minHeight: 80,
  };

  injectGlobal`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
  `;

  return (
    <Main>
      {[1, 2, 3, 4, 6, 12].map(numberOfColumns => (
        <Row key={`row${numberOfColumns}`} style={{ ...backgroundStyle }}>
          {[...Array(numberOfColumns)].map((_, index) => (
            <Column
              key={`column${numberOfColumns}${index}`}
              style={{ backgroundColor: `rgba(50, 120, 120, ${numberOfColumns / 12 + 0.2})` }}
              spanSmall={collapse ? 12 : 12 / numberOfColumns}
              spanLarge={12 / numberOfColumns}
            >
              <div style={{ ...contentStyle }}>{`${index + 1} / ${numberOfColumns}`}</div>
            </Column>
          ))}
        </Row>
      ))}
    </Main>
  );
};
