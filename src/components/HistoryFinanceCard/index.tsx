import React from 'react';
import { Container, Tag } from './styles';

interface IHistoryFinanceCard {
    cardColor: string,
    tagColor: string,
    title: string,
    subtitle: string,
    amount: string
}  

const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
    title, tagColor, subtitle, amount, cardColor
}) => {
    return(
        <Container color={cardColor}>
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>{amount}</h3>

        </Container>        
    );
}

export default HistoryFinanceCard;