import styled from 'styled-components';


export const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 100px;

    margin-top: 150px;

    @media screen and (max-width: 1000px) {
        gap: 30px;
        margin-top: 100px;
    }
`

export const VerticalDiv = styled.div`
    width: 1000px;
    max-width: min(100%, 1000px);
    height: 100%;

    background: ${props => (props.backgroundColor ? props.backgroundColor : `transparent`)};;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    padding: 30px 0px;

    border-radius: 10px;

    &.centered {
        align-items: center;
        justify-content: space-around;
    }

    &.noMargin{
        margin-top: 0px;
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;
        padding: 30px 20px
    }
`

export const WhyLearnDiv = styled.div`
    width: 490px;
    max-width: min(100%, 470px);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }
`



export const HorizontalDiv = styled.div`
    width: 1000px;
    max-width: min(100%, 1000px);
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &.centered {
        justify-content: space-around;
    }

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: space-between;
    }
`


export const ButtonWrapper = styled.div`
    width: 700px;
    max-width: min(700px, 100%);
    /* background: red; */
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 30px;

    @media screen and (max-width: 560px) {
        gap: 20px;
    }
`

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`