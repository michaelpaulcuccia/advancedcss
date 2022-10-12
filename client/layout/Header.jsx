import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
`;

export default function Header() {
  return (
    <>
        <Root>
            <img src='/assets/images/hero_one.jpeg' alt=''/>
        </Root>
    </>
  )
}
