import React from 'react';
import {Container, TitleContainer, Controllers } from './styles';
import SelectInput from '../SelectIpunt';


interface IContentHeader{
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeader> = ({
    title, lineColor, children
}) => {



    return(
        <Container>
            <TitleContainer lineColors={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
        
    );
}

export default ContentHeader;