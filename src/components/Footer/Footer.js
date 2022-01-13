import React from 'react'
import { FooterMainContainer, FooterNavContainer } from './styled'
import activeAvatar from '../../assets/NavIcons/active_avatar.svg'
import activeHomepage from '../../assets/NavIcons/active_homepage.svg'
import activeCart from '../../assets/NavIcons/active_shopping-cart.svg'
import unactiveAvatar from '../../assets/NavIcons/unactive_avatar.svg'
import unactiveHomepage from '../../assets/NavIcons/unactive_homepage.svg'
import unactiveCart from '../../assets/NavIcons/unactive_shopping-cart.svg'

export default function Footer() {

    const pathname = window.location.pathname

    return (
        <FooterMainContainer>
            <FooterNavContainer>
                <img src={pathname === '/' ? activeHomepage : unactiveHomepage } alt='Home Icon' />
            </FooterNavContainer>   
            <FooterNavContainer>
                <img src={pathname === '/carrinho' ? activeCart : unactiveCart } alt='Cart Icon' />
            </FooterNavContainer>  
            <FooterNavContainer>
                <img src={pathname === '/perfil' ? activeAvatar : unactiveAvatar } alt='Avatar Icon' />
            </FooterNavContainer>  
        </FooterMainContainer>
    )
}
