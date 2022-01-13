import React, { useEffect, useState, useContext } from "react";
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
import { BASE_URL } from '../../constants/url'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import OrderHistoryItem from "../../components/OrderHistoryItem/OrderHistoryItem"
import { GlobalContext } from "../../contexts/GlobalStateContext"
import useRequestData from "../../hooks/useRequestData"
import LoadingText from '../../components/Loading/LoadingText'

export default function ProfilePage() {

    const { states } = useContext(GlobalContext)
    const [ profile, setProfile ] = useState({})
    const url = `${BASE_URL}profile`

    const data = useRequestData({}, url)

    useEffect(() => {
        setProfile(data.user)
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
                    <p>{states.isLoading ? <LoadingText /> : profile && profile.name}</p>
                    <EditOutlinedIcon />
                </ProfileInfoAndIconContainer>
                <p>{states.isLoading ? <LoadingText /> : profile && profile.email}</p>
                <p>{states.isLoading ? <LoadingText /> : profile && profile.cpf}</p>
            </ProfileInfoContainer>
            <ProfileAddressContainer>
                <ProfileAddressTextContainer>
                    <h3>Endereço Cadastrado</h3>
                    <p>{states.isLoading ? <LoadingText /> : profile && profile.address}</p>
                </ProfileAddressTextContainer>
                <ProfileAddressIconContainer>
                    <EditOutlinedIcon />
                </ProfileAddressIconContainer>
            </ProfileAddressContainer>
            <ProfileOrderHistoryContainer>
                Histórico de Pedidos
            </ProfileOrderHistoryContainer>
            <OrderHistoryItem />
        </ProfileMainContainer>
    )
}