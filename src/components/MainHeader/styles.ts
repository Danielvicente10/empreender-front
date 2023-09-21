import styled from "styled-components";

export const Container = styled.div`
     grid-area: MH;
     background-color: ${props => props.theme.colors.secundary};
     display: flex;
     justify-content: space-between;
     padding: 0 10px;

`;

export const Profile = styled.div`
     color: ${props => props.theme.colors.white}
`;

export const Wellcome = styled.h3``;

export const UserName = styled.span``;