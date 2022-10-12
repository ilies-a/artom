import styled from 'styled-components';

const maxWidthForMobile = '400px';

const getTextForMobile = props =>{
    return props.text.mobile;
}

const getTextForDesktop = props =>{
    return props.text.desktop;
}

export const ButtonTextContainer = styled.div`
    @media (max-width: ${maxWidthForMobile}) {
        &:before{
            content: "${getTextForMobile}";
        }
    }
    @media (min-width: ${maxWidthForMobile}) {
        &:after {
            content: "${getTextForDesktop}";
        }
    }
    `