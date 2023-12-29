import React from 'react';
import styled from 'styled-components'
import Chick from '../Icons/Chick';


const Wrapper = styled.div`
  margin: 300px;
  width:200px;
  height: 200px;
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  position: relative;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(49,27,146,1) 0%, rgba(156,39,176,1) 100%);
`

const Logo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  svg {
    width: 150px;
    height: 150px;
  }
`;

const Header = () => (
  <header>
    <Wrapper>
      <Logo>
        <Chick />
      </Logo>
    </Wrapper>
  </header>
);

export default Header
