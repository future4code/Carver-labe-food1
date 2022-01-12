import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { login } from "../../services/user"
import { InputsContainer, LoginFormContainer } from "./styled"
import InputRHF from "../../components/RHF/InputRHF";
import InputPasswordRHF from "../../components/RHF/InputPasswordRHF";

const mode = 'onSubmit';

const defaultValues = {
    email: '',
    password: '',
}

const schema = {
    mode,
    defaultValues,
    resolver: yupResolver(
        yup.object().shape({
            email: yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
            password: yup.string().min(6, 'Tamanho mínimo 6 caracteres').required('Senha é obrigatória'),
        }).required()
    )
}
const LoginForm = () => {
    const form = useForm(schema);
    const { control, handleSubmit } = form;
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = () => {
        login(form.getValues(), form.reset(), history, setIsLoading)
    }

    return (
        <LoginFormContainer>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                <InputsContainer>
                    <InputRHF
                        name='email'
                        label={'E-mail'}
                        control={control}
                    />
                                       <InputPasswordRHF
                        name='password'
                        label={'Senha'}
                        control={control}
                    />

                </InputsContainer>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Fazer Login</>}
                </Button>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm