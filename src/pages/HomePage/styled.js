import styled from "styled-components"
import { TextField } from "@mui/material"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
margin: 50px;
h4{
    margin-top: 70px;
}
`

export const Input = styled(TextField)`
width: 338px;
margin-bottom: 20px;
`

export const InputContainer = styled.div`
display: flex;
`

export const PageTittleContainer = styled.div`
    width: 100%;
    height: 49px;
    top: 0;
    position: fixed;
    display: flex;
    border-bottom: solid 1px #b8b8b8;
    background-color: #FFF;
`

export const TittleNavContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
