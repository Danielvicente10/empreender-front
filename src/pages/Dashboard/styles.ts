import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const TitleContainer = styled.div `
    > h1{
        color: ${props => props.theme.colors.white};    
    }

    &::after{
        content: '';
        width: 55px;
        display: block;
        border-bottom: 10px solid ${props => props.theme.colors.warning};
    }
`;

export const Controllers = styled.div `
    display: flex;
`;   