import styled from "styled-components"
import { TextField } from "@mui/material"

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
`

export const Input = styled(TextField)`
width: 338px;
`