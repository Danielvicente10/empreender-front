import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import {ThemeProvider} from 'styled-components';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Dashboard from "./pages/Dashboard/Index";
import List from "./pages/List/Index";


const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}> 
            <GlobalStyles/>
            <Layout>
                <List/>
            </Layout>
        </ThemeProvider>
        
    )
}

export default App;