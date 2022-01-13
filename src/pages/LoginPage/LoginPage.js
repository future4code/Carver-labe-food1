import React from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled"
//import logo from "../../assets/logo.png"
import Button from '@mui/material/Button';
import LoginForm from "./LoginForm"
import { useNavigate } from 'react-router-dom'
import { goToSignUpPage } from "../../routes/coordinator"
//import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = () => {
    //useUnprotectedPage()
    const history = useNavigate()
    return (
        <ScreenContainer>
            <LogoImage src={''} />
            <p>Entrar</p>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUpPage(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                >
                    Não possui cadastro? Cadastre-se
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage