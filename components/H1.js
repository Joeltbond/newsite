import styled from 'styled-components';
import { fonts, breakpoint } from '../style-utils/constants';

export default styled.h1`
  font-family: ${fonts.roboto};
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 0;

  @media (min-width: ${breakpoint}px) {
    font-size: 64px;
  }
`;
