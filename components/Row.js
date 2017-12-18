import styled from 'styled-components';
import { gutters, breakpoint } from '../style-utils/constants';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${gutters.small}px;
  margin-right: -${gutters.small}px;

  @media (min-width: ${breakpoint}px) {
    margin-left: -${gutters.large}px;
    margin-right: -${gutters.large}px;
  }
`;
