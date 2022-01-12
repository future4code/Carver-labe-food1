import React from 'react'
import { FooterMainContainer, FooterNavContainer } from './styled'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'

export default function Footer() {

    const pathname = window.location.pathname
    console.log(pathname)


    return (
        <FooterMainContainer>
            <FooterNavContainer>
                <HomeOutlinedIcon sx={{fontSize: 30}} color={pathname === '/' ? 'primary' : 'disabled'} />
            </FooterNavContainer>   
            <FooterNavContainer>
                <ShoppingCartOutlinedIcon sx={{fontSize: 30}} color={pathname === '/carrinho' ? 'primary' : 'disabled'} />
            </FooterNavContainer>  
            <FooterNavContainer>
                <PermIdentityOutlinedIcon sx={{fontSize: 30}} color={pathname === '/perfil' ? 'primary' : 'disabled'} />
            </FooterNavContainer>  
        </FooterMainContainer>
    )
}
