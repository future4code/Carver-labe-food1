import { TextField } from "@mui/material"
import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px;
`
export const CategoryContainer = styled.div`
display: flex;
justify-content: space-evenly;
border: 1px solid black;
margin: 8px;
padding: 8px;
`
export const Input = styled(TextField)`
width: 338px;
`
