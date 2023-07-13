import { Link } from 'react-scroll';
import styled from 'styled-components';


export const PlanCardWrapper = styled.div`
    justify-content: space-between;
    align-items: center;
    margin-top: 4.33vw;
    display: flex;

    gap: 10px;
    width: 1000px;
    max-width: min(100%, 1000px);
    margin-top: 30px;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`

export const PlanCard = styled.div`
    
    /* width: 100%; */
    max-width: min(100%, 333px);
    /* min-height: max(100%, 105px); */
    border-radius: 10px;
    background: rgba(6, 174, 255, 0.1);
    padding: 20px;
    box-shadow: rgba(0,0,0,.05) 0px 3px 12px;

    @media screen and (min-width: 1000px) {
        &:hover {
            transition: all ease-in-out 0.2s;
            transform: scale(1.02, 1.02);
        }
    }
`

export const RedLabel = styled.div`
    background-color: #9d1c14;
    border-radius: 2px;
    /* margin-bottom: 24px; */
    padding: 4px 12px;

    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    width: 170px;

    margin-bottom: 10px;
`

export const SecondaryBox = styled.div`
    border: 1px solid #e1e1e1;
    border-radius: 20px;
    padding: 20px;

    color: #5f5656;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    display: flex;
    flex-direction: column;

    margin-top: 10px;
`

export const SecondaryBotton = styled(Link)`
    width: 100%;
    text-align: center;
    cursor: pointer;
    background-color: #2d2828;
    border-radius: 4px;
    margin-top: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;

    color: white;

`

export const PlanCardName = styled.h4`
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
`

export const PlanCardContent = styled.div`
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
`