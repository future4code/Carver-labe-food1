import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { IconButton, Toolbar } from '@material-ui/core'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CircularProgress from '@material-ui/core/CircularProgress'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import InputRHF from '../../components/RHF/InputRHF'

import { signAddress } from '../../services/user'
import { Box, Typography } from '@mui/material'

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

const SignAddressForm = () => {
    const history = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm(schema);
    const { control, handleSubmit } = form;

    const onSubmit = () => {
        signAddress(form.getValues, form.reset(), history, setIsLoading)
    }
    return (
        <>
            <Toolbar sx={{ width: '-webkit-fill-available', bgcolor: 'background.paper', boxShadow: 1, }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 15 }}
                >
                    <ArrowBackIosIcon />
                </IconButton>

            </Toolbar>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                autoComplete='off'
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '84%',
                    gap: '16px',
                    mt: 4
                }}
            >
                <Typography
                    variant="h6"
                    textAlign={'center'}
                >
                    Meu Endereço
                </Typography>

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
                <Button
                    color={'primary'}
                    variant={'contained'}
                    type={'submit'}
                    fullWidth
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Salvar</>}
                </Button>
            </Box>
        </>

    )
}

export default SignAddressForm;