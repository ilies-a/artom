import styled from 'styled-components';

const getTextForMobile = props =>{
    return props.text.mobile;
}

const getTextForDesktop = props =>{
    return props.text.desktop;
}

export const ButtonTextContainer = styled.div`
    &:before {
        content: "${getTextForDesktop}";
    }
    @media (pointer:coarse) {
        &:before{
            content: "${getTextForMobile}";
        }
    }
    `