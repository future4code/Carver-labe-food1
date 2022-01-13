import styled from "styled-components"

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

export const Input = styled.input`
width: 308px;
margin-bottom: 20px;
border: none;
height: 56px;
font-size: 15px;
padding-left: 10px;

`

export const InputContainer = styled.div`
width: 338px;
display: flex;
border: 1px solid #b8b8b8;
height: 58px;
padding-left: 10px;
border-radius: 3px;
textarea:focus, input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
}
`

export const PageTittleContainer = styled.div`
    width: 100%;
    height: 49px;
    top: 0;
    position: fixed;
    display: flex;
    border-bottom: solid 1px #b8b8b8;
    background-color: #FFF;
    z-index: 1;
`

export const TittleNavContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
