import React from 'react';
import { Container } from './syles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectIpunt';
import Content from '../../components/Content';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

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

            <Content>
                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />
                
                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />

                <HistoryFinanceCard 
                title='Conta de Luz'
                subtitle='26/09/2023'
                cardColor='#313862'
                tagColor='#e44c4e'
                amount='R$ 130,00'
                
                />
                
            </Content>
        </Container>
        
    );
}

export default List;