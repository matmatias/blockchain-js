import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-top: 60px;
  background: #202020;
  border-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  gap: 10px;
`



export const Button = styled.button`
  display: inline-block;
  padding: 10px;
  margin-bottom: 30px;
  border-radius: 3px;
  background-color: rgb(70,70,70);
  color: white;
  text-decoration: none;
  border-style: none;
  &:hover {
    background-color: rgb(90,90,90);
    cursor: pointer;
  }
`