import React from 'react';

import Main from '../components/Main';
import CenterText from '../components/CenterText';
import Tagline from '../components/Tagline';
import H1 from '../components/H1';
import H2 from '../components/H2';
import P from '../components/P';

export default () => (
  <Main>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
    <H1>Big Header</H1>
    <CenterText>
      <Tagline>
        Lorum ipsum something dude okay man alight I think this is great. Something Fun is a.
      </Tagline>
    </CenterText>
    <H2>Header 2</H2>
    <P>
      Lorum ipsum something dude okay man alight I think this is great. somthiig d is a Lorum ipsum
      something dude okay man alight I think this is great. somthiig d is a leading source of
      capital for entrepreneurs pushing the world forward. Lorum ipsum something dude okay man
      alight I think this is great. somthiig d is a
    </P>
    <H2>Header 2</H2>
    <P>
      Lorum ipsum something dude okay man alight I think this is great. somthiig d is a Lorum ipsum
      something dude okay man alight I think this is great. somthiig d is a leading source of
      capital for entrepreneurs pushing the world forward. Lorum ipsum something dude okay man
      alight I think this is great. somthiig d is a
    </P>
  </Main>
);
