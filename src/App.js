import React from 'react'
import styled from 'styled-components'
import Button from './components/Button'

const MainWrapper = styled.section`
width: 100%;
max-width: 1200px;
margin: 0 auto;
display:flex;
flex-direction: column;

`
const PaginationWrapper = styled.div`
display:flex;
width: 100%; 
justify-content: ${({page}) => {
  if (page === 'first') return 'flex-end'
  else if (page === 'middle') return 'space-between'
  else return 'flex-start'
}}
`

const Link = styled.a.attrs(props => ({
  target:'_blank'
}))`
color:violet;
font-size:2.5rem;

`

const App = () =>{
  return (
    <MainWrapper>
       <Button primary margin ="5rem">My  primary button</Button>
      <Button>My button</Button>
      <PaginationWrapper page = "middle">
        <Button>Page 2</Button>
        <Button>Page 4</Button>
      </PaginationWrapper>
      <Link href ='https://www.google.com' >One link</Link>
      <Link href ='https://www.google.com'  >Another  link</Link>
    </MainWrapper>
  );
}

export default App;
