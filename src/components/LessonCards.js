import styled from 'styled-components';


export const LessonCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
    width: 1000px;
    max-width: min(100%, 1000px);
    margin-top: 30px;

    &.mainBlock {
        margin-bottom: 70px;
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
`


export const LessonCard = styled.div`
    /* display: flex;
    flex-direction: column; */
    gap: 20px;

    width: 100%;
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
    // TODO: fix this
    display: gird;
    grid-template-columns: 1fr;
    grid-template-rows: 400px 20px 100px 100px;
    row-gap: 20px;
`

export const LessonCardImage = styled.div`
    background-image: url(${({ background }) => background});
    width: 100%;
    height: 250px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0,0,0,.05) 0px 3px 12px;
    margin-bottom: 20px;
`

export const PriceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    margin-top: 40px;
    margin-bottom: 20px;

`

export const NewPrice = styled.p`
    font-size: 22
    px;
    font-weight: 500;
    color: #0D0D2B;
    margin-right: 10px;
`

export const OldPrice = styled.p`
    margin-bottom: 30px;
    font-size: 16px;
    /* font-weight: 600; */
    color: #828282;
    position: absolute;
    transform: translate(90%, -60%);

    text-decoration: line-through
`