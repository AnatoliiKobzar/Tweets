import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 8px 12px;
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: calc(24 / 16);
  color: #dedeffff;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  transition: all 200ms ease-in-out;

  &:hover {
    color: #5736a3;
    background-color: transparent;
    box-shadow: 0 0 10px 0 #5736a3 inset, 0 0 10px 4px #5736a3;
    border: 2px solid #5736a3;
  }
  &.active {
    color: #5736a3;
  }
`;
