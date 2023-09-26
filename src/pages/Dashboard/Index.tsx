import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectIpunt';

const Dashboard: React.FC = () => {

    const options =[
        {value: 'Daniel', label: 'Daniel'},
        {value: 'Marcos', label: 'Marcos'},
        {value: 'Eliana', label: 'Eliana'}
    ]

    return(
        <Container>
            <ContentHeader title='Dashboard' lineColor='#FFF'>
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>      
    );
}

export default Dashboard;