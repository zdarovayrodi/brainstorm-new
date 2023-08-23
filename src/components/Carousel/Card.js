import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

export const CarouselCardWrapper = styled.div`
    position: relative;
    height: 500px;
    width: 38rem;
    overflow-x: hidden;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: middle;
`

export const CarouselCard = styled(Card)`
    min-width: 280px;
    width: 280px;
`