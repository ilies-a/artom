import styled from 'styled-components'

const UNSELECTED_CONTAINER_HEIGHT_FOR_SMALL_WIDTH = 70;
const UNSELECTED_CONTAINER_HEIGHT_FOR_LARGE_WIDTH = 50;
import { 
    MEDIUM_SCREEN_MAX_WIDTH,
  } from '../../styles/variables';


const getHeightForSmallWidth = props =>{
    const result = props.isSelected ? props.contentHeight : UNSELECTED_CONTAINER_HEIGHT_FOR_SMALL_WIDTH;
    return result;
}

const getHeightForLargeWidth = props =>{
    return props.isSelected ? props.contentHeight : UNSELECTED_CONTAINER_HEIGHT_FOR_LARGE_WIDTH;
}

const getColor = props =>{
    return props.isSelected ? 'black':'rgb(48, 48, 48)';
}

export const FaqItemContainer = styled.div`
    @media(min-width: ${MEDIUM_SCREEN_MAX_WIDTH}px){
        height:${getHeightForLargeWidth}px;
    }
    @media(max-width: ${MEDIUM_SCREEN_MAX_WIDTH}px){
        height:${getHeightForSmallWidth}px;
    }
    transition: height 0.2s;
    margin-bottom:10px;
    overflow: hidden;
    >div{
        border-radius: 5px;
        padding:0px 10px;
        padding-bottom:10px;
        background-color: rgba(255,255,255,0.75);
        color:${getColor};
    }
    `

export const TitleAndButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media(min-width: ${MEDIUM_SCREEN_MAX_WIDTH}px){
        height:${UNSELECTED_CONTAINER_HEIGHT_FOR_LARGE_WIDTH}px;
    }
    @media(max-width: ${MEDIUM_SCREEN_MAX_WIDTH}px){
        height:${UNSELECTED_CONTAINER_HEIGHT_FOR_SMALL_WIDTH}px;
    }
    align-items: center;
    `