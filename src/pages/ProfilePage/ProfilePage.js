import React, { useEffect, useState } from "react";
import { 
    ProfileMainContainer, 
    ProfileHeaderContainer, 
    ProfileHeaderTextContainer, 
    ProfileInfoContainer, 
    ProfileInfoAndIconContainer, 
    ProfileAddressContainer,
    ProfileAddressTextContainer,
    ProfileAddressIconContainer,
    ProfileOrderHistoryContainer
    } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import OrderHistoryItem from "../../components/OrderHistoryItem"
import { token } from "../../constants/tempTokenCesar"


export default function ProfilePage() {

    const [ profile, setProfile ] = useState({})

    const url = `${BASE_URL}profile`

    useEffect(() => {
        axios.get(url, {headers: {
            auth: token
        }})
        .then((res) => {
            setProfile(res.data.user)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <ProfileMainContainer>
            <ProfileHeaderContainer>
                <ProfileHeaderTextContainer>
                    Meu perfil
                </ProfileHeaderTextContainer>
            </ProfileHeaderContainer>
            <ProfileInfoContainer>
                <ProfileInfoAndIconContainer>
                    <p>{profile.name}</p>
                    <EditOutlinedIcon />
                </ProfileInfoAndIconContainer>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
            </ProfileInfoContainer>
            <ProfileAddressContainer>
                <ProfileAddressTextContainer>
                    <h3>Endereço Cadastrado</h3>
                    <p>{profile.address}</p>
                </ProfileAddressTextContainer>
                <ProfileAddressIconContainer>
                    <EditOutlinedIcon />
                </ProfileAddressIconContainer>
            </ProfileAddressContainer>
            <ProfileOrderHistoryContainer>
                Histórico de Pedidos
            </ProfileOrderHistoryContainer>
            <OrderHistoryItem /> {/*falta fazer o map de cada item*/}
        </ProfileMainContainer>
    )
}