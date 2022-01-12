import React from 'react'
//import logo from '../../assets/logo.png'
import { ScreenContainer } from './styled'
import { LogoImage } from './styled'
import SignAdressForm from './SignAdressForm'

const SignAdressPage = () => {
    
    return (
        <ScreenContainer>
            <LogoImage src={""} />
            <p>Meu Endereço</p>
            <SignAdressForm />
        </ScreenContainer>
    )
}

export default SignAdressPage