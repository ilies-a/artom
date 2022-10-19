import styled from 'styled-components'


const getListIndex = props =>{
    return props.index;
}

export const TitleListContainer = styled.ol`

        counter-reset: title-list-counter ${getListIndex};
        >li{
            counter-increment: title-list-counter;
        }
        >li:before{
            content: counter(title-list-counter);
        }
        ` 
export const ItemListContainer = styled.ol`

        >li{
            counter-increment: item-list-counter;
        }
        >li:before{
            content: counter(title-list-counter) "." counter(item-list-counter);
        }
        `