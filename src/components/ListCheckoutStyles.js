import styled from 'styled-components';


export const Box = styled.ul
  `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    margin: auto;
    margin-top: 1em;
    list-style: none;
    border: solid;
    border-width: 0.1em;
    width: 40em;
    align-items: center;
  `;

export const Body = styled.li
  `
    font-size: 1em;
    text-align: center;
  `;

export const Img = styled.img
  `
    border-radius: 8px;
    &:hover {
      transform: scaleX(-1)
    }
  `;

