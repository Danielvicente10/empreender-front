import styled from "styled-components";


interface ITitleContainer {
    lineColors: string;
}

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const TitleContainer = styled.div<ITitleContainer> `
    > h1{
        color: ${props => props.theme.colors.white};    
    }

    &::after{
        content: '';
        width: 55px;
        display: block;
        border-bottom: 10px solid ${props => props.lineColors};
    }
`;

export const Controllers = styled.div `
    display: flex;
`;   