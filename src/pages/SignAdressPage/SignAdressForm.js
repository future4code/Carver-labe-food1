import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import InputRHF from '../../components/RHF/InputRHF'
import { signAdress } from '../../services/user'

const mode = 'onSubmit';

const defaultValues = {
    logradouro: '',
    number: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: ''
}

const schema = {
    mode,
    defaultValues,
    resolver: yupResolver(
        yup.object().shape({
            logradouro: yup.string().required('Campo Obrigatório'),
            number: yup.string().required('Campo Obrigatório'),
            complemento: yup.string(),
            bairro: yup.string().required('Campo Obrigatório'),
            cidade: yup.string().required('Campo Obrigatório'),
            estado: yup.string().required('Campo Obrigatório')
        }).required()
    )
}

const SignAdressForm = () => {
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm(schema);
    const { control, handleSubmit } = form;

    const onSubmit = () => {
        signAdress(form.getValues, form.reset(), history, setIsLoading)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SignUpFormContainer>
                <InputsContainer>

                    <InputRHF
                        name="logradouro"
                        label={"logradouro"}
                        control={control}

                    />
                    <InputRHF
                        name='number'
                        label={'Número'}
                        control={control}
                    />

                    <InputRHF
                        name='complemento'
                        label={'Complemento'}
                        control={control}

                    />
                    <InputRHF
                        name='bairro'
                        label={'Bairro'}
                        control={control}

                    />
                    <InputRHF
                        name='cidade'
                        label={'Cidade'}
                        control={control}

                    />
                    <InputRHF
                        name='estado'
                        label={'Estado'}
                        control={control}

                    />
                </InputsContainer>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Criar</>}
                </Button>
            </SignUpFormContainer>
        </form>
    )
}

export default SignAdressForm