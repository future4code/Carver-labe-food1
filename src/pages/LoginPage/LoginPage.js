import React from "react";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import { goToSignUpPage } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const LoginPage = () => {
    useUnprotectedPage()
    const history = useNavigate()
    return (
        <ScreenContainer>
            <LogoImage src={logo} alt='logo' />
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
    );
};

export default LoginPage;