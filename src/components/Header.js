import styled from 'styled-components';


export const NavbarWrapper = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10vh;

    @media screen and (max-width: 560px) {
        margin-bottom: 1vh;
        height: 60px;
        padding: 10px 20px;
    }
`

export const NavbarName = styled.h1`
    font-weight: 800;
    color: black;
    font-size: 32px;
    text-align: left;
`