import React from 'react';
import { Container } from './syles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectIpunt';

const List: React.FC = () => {

    const options =[
        {value: 'Daniel', label: 'Daniel'},
        {value: 'Marcos', label: 'Marcos'},
        {value: 'Eliana', label: 'Eliana'}
    ]
    
    return(
        <Container>
           <ContentHeader title='List' lineColor='#FFF'>
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
        
    );
}

export default List;