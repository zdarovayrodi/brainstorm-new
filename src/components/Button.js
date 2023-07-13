import styled from 'styled-components'


import { Link } from 'react-scroll';


export const Button = styled(Link)`
    background: transparent;
    border-radius: 10px;
    border: 5px solid rgba(6, 174, 255, 1);
    color: rgba(6, 174, 255, 1);
    box-shadow: rgba(0,0,0,.09) 0px 3px 12px;

    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 22px;
    cursor: pointer;
    
    @media screen and (min-width: 1000px) {
        &:hover {
            transition: all ease-in-out 0.4s;
            background: rgba(6, 174, 255, 1);
            color: white;
            transform: scale(1.02, 1.02);
        }
    }

    @media screen and (max-width: 385px) {
        font-size: 18px;
    }

    @media screen and (max-width: 324px) {
        font-size: 16px;   
    }

    &.primary {
        background: rgba(6, 174, 255, 1);
        color: white;
        font-weight: 600;
        padding-right: 2em;

        @media screen and (min-width: 1000px) {
            &:hover {
                transition: all ease-in-out 0.4s;
                background: transparent;
                color: rgba(6, 174, 255, 1);
                transform: scale(1.02, 1.02);
            }
        }
    }
`