import React, {ReactNode} from 'react';
import { Grid } from './styles';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

interface ContentProps {
    children: ReactNode;
  }
  

const Layout: React.FC<ContentProps> = ({ children }) => {
    return(
        <Grid>
            <MainHeader/>
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
        
    );
}

export default Layout;