import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 100wv;
    background-color: rgba(6, 174, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: left;
    justify-content: center;
    padding: 40px 0px;
    
    @media (max-width: 1200px) {
        padding: 30px 40px;
    }
`

export const FooterH1 = styled.span`
    font-weight: 800;
    color: white;
    font-size: 42px;
    /* text-align: center; */

    line-height: 80px;
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

export const Item = styled.a`
    font-size: 22px;
    color: #fff;
    margin-bottom: 20px;
    left: 0;
    text-decoration: none;
    underline: none;

    @media screen and (max-width: 1200px) {
        font-size: 18px;
    }
`