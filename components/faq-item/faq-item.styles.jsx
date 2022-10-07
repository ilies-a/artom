import styled from 'styled-components'


const getHeight = props =>{
    return props.height;
}

const getUnselectedHeight = props =>{
    return props.unselectedHeight;
}

const getColor = props =>{
    return props.isSelected ? 'black':'rgb(48, 48, 48)';
}

export const FaqItemContainer = styled.div`
    height:${getHeight};
    transition: height 0.2s;
    margin-bottom:10px;
    overflow: hidden;
    >div{
        border-radius: 5px;
        padding:0px 10px;
        padding-bottom:10px;
        background-color: rgba(255,255,255,0.5);
        color:${getColor};
    }
    `

export const TitleAndButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: ${getUnselectedHeight};
    align-items: center;
    `