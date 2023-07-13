import styled from 'styled-components';


export const Illustration = styled.div`
    background-image: url(${props => props.backgroundImg});
    width: 900px;
    max-width: min(100%, 900px);
    height: 300px;
    /* background: red; */

    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: auto 100%;

    /* background-image: url(${({ background }) => background});
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0,0,0,.05) 0px 3px 12px;
    margin-bottom: 20px; */
`
