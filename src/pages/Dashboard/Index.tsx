import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';
import ContentHeader from '../../components/ContentHeader';

const Dashboard: React.FC = () => {
    return(
        <Container>
            <TitleContainer>
                <h1>Title</h1>
            </TitleContainer>            
            <Controllers>
                <button type='button'>Botão A</button>
                <button type='button'>Botão B</button>
            </Controllers>
        </Container>      
    );
}

export default Dashboard;