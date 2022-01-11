import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from "../../services/user"
import CircularProgress from '@material-ui/core/CircularProgress'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const SignUpForm = () => {
    const history = useNavigate()
    const [form, onChange, clear] = useForm({ name: '', email: '' })
    const [isLoading, setIsLoading] = useState(false)
    const [values, setValues] = useState({
        showPassword: false,
        password: "",
        passConfirm: ''
    });
    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setIsLoading)
    }
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        value={form.name}
                        name={'name'}
                        onChange={onChange}
                        label={'Nome'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField
                        value={form.email}
                        name={'email'}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={'outlined'}
                        type={'email'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                    <TextField
                        value={form.cpf}
                        name={'cpf'}
                        onChange={onChange}
                        label={'CPF'}
                        variant={'outlined'}
                        type={'number'}
                        fullWidth
                        required
                        margin={'normal'}
                    />
                    <FormControl fullWidth required variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControl fullWidth required variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirmar</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.passConfirm}
                            onChange={handleChange('passConfirm')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        <VisibilityOff />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirmar"
                        />
                    </FormControl>
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

export default SignUpForm