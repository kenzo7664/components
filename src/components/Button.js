import React from "react";
import styled, {css} from 'styled-components'

import { Wrapper,FadeIn } from "./styled";

const OutterWrapper = styled.div`
 width:100%;
 background-color: blueviolet;
 margin-top:2rem;

`


const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.main};
  font-size:${props => props.theme.fontSizes.p};
  margin: ${({margin }) => margin || '2rem'};
  padding: 0.5rem 1rem;
  margin-top: ${({theme}) => theme.spacers.large};
  border: 1px solid palevioletred;
  border-radius:3px;
  animation: 2s ${FadeIn} ease-in;
  ${({primary}) => primary && css`
    background-color: palevioletred;
    color:white;
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.2)
  ` }
&:hover{
  color:white;
  background-color: palevioletred;
}
${OutterWrapper}:hover &{
  color:red;
}

@media ${({theme}) => theme.mediaQueries['below-768']}{
  font-size:0.4rem;
  color:blue;
}

`


// const StyledLink = styled(Link)`
  
// `

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`
const Button = ({primary, margin,  children})=>{
    return(
      <>
        <OutterWrapper>
          <StyledButton primary = {primary} margin ={margin}>
            {children}
            </StyledButton>
          <SuperButton>{children}</SuperButton>
        </OutterWrapper>
      </>
    )
}

export default Button