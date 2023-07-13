import styled from 'styled-components';


export const HighlightBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;

    gap: 15px;
    width: 1000px;
    max-width: min(100%, 1000px);

    &.mainBlock {
        /* margin-bottom: 20px; */
        flex-direction: row;
        justify-content: space-evenly;
        gap: 10px;

        @media screen and (max-width: 1000px) {
            padding: 0 25px;
        }
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
    }
`

export const HighlightBox = styled.div`
    width: 100%;
    /* max-width: min(100%, 333px); */

    background: rgba(6, 174, 255, 0.2);
    /* background: transparent; */
    /* border: 8px solid rgba(6, 174, 255, 0.2); */
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgba(0,0,0,.05) 0px 3px 12px;

    &.withIcon {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    &.transparent {
        background: transparent;
        box-shadow: none;
    }

    @media screen and (min-width: 1000px) {
        &:hover {
            transition: all ease-in-out 0.2s;
            transform: scale(1.02, 1.02);
        }
    }
`

export const Separator = styled.div`
    width: 4px;
    height: 100%;
    background-color: #2e2e2e;
`

export const HighlightBoxName = styled.button`
    border-radius: 20px;
    padding: 0.5em 1.2em;
    padding-left: 45px;
    background-color: black;

    margin-bottom: 10px;

    font-weight: 600;
    color: white;
    font-size: 16px;
    text-align: left;

    &.centered {
        text-align: center;
    }
`

export const HighlightBoxContent = styled.p`
    font-weight: 400;
    font-size: 16px;
    text-align: left;

    &.centered{
        text-align: center;
    }

    &.transparent {
        color: #2e2e2e;
    }
`

export const WhyLearnWrapper = styled.div`
    width: 1000px;
    max-width: min(1000px, 100%);
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        gap: 40px;
    }
`

export const WhyLearnBoxWrapper = styled.div`
    width: 500px;
    max-width: min(100%, 500px);
    
    display: flex;
    flex-direction: column;
    gap: 15px;

    align-items: center;
`

export const SuitableForCard = styled.div`
    width: 100%;
    height: 300px;
    background-color: red;
`

export const BaldName = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 6px;
    padding-left: 30px;
`