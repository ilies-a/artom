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
    border-top: 1px solid black;
    height:${getHeight};
    overflow: hidden;
    color:${getColor};
    transition: height 0.2s;
    margin-bottom:10px;
    `

export const TitleAndButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: ${getUnselectedHeight};
    align-items: center;
    `