import styled from 'styled-components';
import { gutters, columnsTotal, breakpoint } from '../style-utils/constants';

export default styled.div`
  padding-left: ${gutters.small}px;
  padding-right: ${gutters.small}px;
  width: ${props => 100 / columnsTotal * (props.spanSmall || 12)}%;

  @media (min-width: ${breakpoint}px) {
    padding-left: ${gutters.large}px;
    padding-right: ${gutters.large}px;
    width: ${props => 100 / columnsTotal * (props.spanLarge || props.spanSmall)}%;
  }
`;
