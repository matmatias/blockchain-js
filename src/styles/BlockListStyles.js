import styled from 'styled-components';

export const Section = styled.section`
  align-self: center;
  margin-top: 70px;
`

export const Ul = styled.ul`
`

export const Li = styled.li`
  background: #202020;
  border-sizing: border-box;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`