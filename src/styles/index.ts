import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 288px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Input = styled.input`
  padding: 8px 8px 8px 20px;
  width: 100%;
  height: 38px;
  border: none;
  border-radius: 50px;
  background-color: white;
`

export const Title = styled.h1`
  display: block;
  font-size: 40px;
  margin-top: 30px;
  margin-left: 74px;
  margin-bottom: 30px;
`

export default EstiloGlobal
