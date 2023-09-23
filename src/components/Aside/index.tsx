import React from 'react';
import { Container, Header, LogoImg, MenuContainer, MenuIconLink, Title} from './styles';
import logoImg from '../../assets/logo.svg';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';   


const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogoImg src={logoImg} alt={"Logo minha carteira"}/>
                <Title>Minha carteira</Title>
            </Header>

            <MenuContainer>
                <MenuIconLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuIconLink>

                <MenuIconLink href="#">
                    <MdArrowUpward/>
                    Entrada
                </MenuIconLink>

                <MenuIconLink href="#">
                    <MdArrowDownward/>
                    Saídas
                </MenuIconLink>

                <MenuIconLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuIconLink>
            </MenuContainer>
        </Container>
        
       
    );
}

export default Aside;