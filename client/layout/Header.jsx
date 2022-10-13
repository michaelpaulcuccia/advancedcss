import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as palette from '../constants/palette';
import * as breakpoints from '../constants/breakpoints';

const Root = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);
    //clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
    position: relative;
`;

const IconBox = styled.div`
    position: absolute;
    top: 3%;
    left: 3%;
`;

const appear = keyframes`

    from {
        opacity: 0;
        transform: translateY(-300%);
        transform: translateX(-300%);
    }

    to {
        opacity: 1;
        transform: translateY(-50%);  
        transform: translateX(-50%);  
    }
`;

const TitleBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${palette.BLACK};
    font-size: 48px;
    letter-spacing: 16px;
    text-shadow: 1px 1px ${palette.WHITE};
    text-transform: uppercase;
    animation-name: ${appear};
    animation-duration: 2s;

    @media (max-width: ${breakpoints.MEDIUM}) {
        font-size: 32px;
        letter-spacing: 10px;
        text-align: center;
    }
`;

export default function Header() {
  return (
    <>
        <Root>
            <IconBox>
                <img src='/assets/icons/jj.svg' alt='' height={`5%`} width={`3%`}/>
            </IconBox>
            <TitleBox>
                arte suave
            </TitleBox>
            <img src='/assets/images/hero_one.jpeg' alt=''/>
        </Root>
    </>
  )
}
