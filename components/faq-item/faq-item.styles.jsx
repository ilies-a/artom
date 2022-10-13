import styled from 'styled-components'

const UNSELECTED_CONTAINER_HEIGHT_FOR_SMALL_WIDTH = 70;
const UNSELECTED_CONTAINER_HEIGHT_FOR_LARGE_WIDTH = 50;
const HORIZONTAL_MIN_WIDTH= 960;

const getHeightForSmallWidth = props =>{

    const result = props.isSelected ? props.contentHeight : UNSELECTED_CONTAINER_HEIGHT_FOR_SMALL_WIDTH;
    console.log("result",result)
    return result;
}

const getHeightForLargeWidth = props =>{
    console.log("props.isSelected",props.isSelected)

    return props.isSelected ? props.contentHeight : UNSELECTED_CONTAINER_HEIGHT_FOR_LARGE_WIDTH;
}

const getColor = props =>{
    return props.isSelected ? 'black':'rgb(48, 48, 48)';
}

export const FaqItemContainer = styled.div`
    @media(min-width: ${HORIZONTAL_MIN_WIDTH}px){
        height:${getHeightForLargeWidth}px;
    }
    @media(max-width: ${HORIZONTAL_MIN_WIDTH}px){
        height:${getHeightForSmallWidth}px;
    }
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
    @media(min-width: ${HORIZONTAL_MIN_WIDTH}px){
        height:${UNSELECTED_CONTAINER_HEIGHT_FOR_LARGE_WIDTH}px;
    }
    @media(max-width: ${HORIZONTAL_MIN_WIDTH}px){
        height:${UNSELECTED_CONTAINER_HEIGHT_FOR_SMALL_WIDTH}px;
    }
    align-items: center;
    `