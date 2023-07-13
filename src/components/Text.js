import styled from 'styled-components';


export const H1 = styled.h1`
    font-weight: 800;
    color: black;
    font-size: 72px;
    text-align: center;

    line-height: 86px;
    letter-spacing: -1px;
    margin-bottom: 30px;

    @media screen and (max-width: 1000px) {
        font-size: 48px;
        line-height: 52px;
    }

    @media screen and (max-width: 384px) {
        font-size: 36px;
        line-height: 42px;
    }
`

export const H2 = styled.h2`
    font-weight: 700;
    color: black;
    font-size: 54px;
    text-align: center;
    
    line-height: 60px;
    letter-spacing: -1px;
    margin-bottom: 20px;

    @media screen and (max-width: 1000px) {
        font-size: 42px;
        line-height: 44px;
    }

    @media screen and (max-width: 384px) {
        font-size: 32px;
        line-height: 38px;
    }
`

export const H3 = styled.h3`
    font-weight: 400;
    color: black;
    font-size: 24px;
    
    margin-bottom: 20px;
    
    width: 700px;
    max-width: min(100%, 700px);

    &.centered {
        text-align: center;
    }

    &.bigGap {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 1000px) {
        font-size: 22px;
    }
`


export const P = styled.p`
    font-weight: 400;
    color: black;
    font-size: 18px;

    width: 600px;
    max-width: min(100%, 600px);

    letter-spacing: 0.3px;
    line-height: 24px;

    &.centered {
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        font-size: 16px;
    }
`

export const Accent = styled.span`
    color: rgba(6, 174, 255, 1);
    text-shadow: rgba(0,0,0,.09) 0px 3px 12px;
    // keep the same styles as the original
    margin: 0;
    padding: 0;
    /* line-height: 0; */
    background-image: linear-gradient(45deg,
        rgba(184, 154, 254,1) 0%,
        rgba(107, 107, 255,1) 35%,
        rgba(67,  139, 241,1) 65%,
        rgba(0,   212, 255,1) 100%,
    );
`