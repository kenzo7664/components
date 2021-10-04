import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
padding: 1rem;
font-size:1.8rem;
color:  ${props => (props.primary ? 'red' : '#fff')};
outline: none;
border : none;
border-radius: 5px;
background-color:#333;

`
const Button = ({primary,children})=>{
    return(
        <StyledButton primary = {primary}>{children}</StyledButton>
    )
}

export default Button