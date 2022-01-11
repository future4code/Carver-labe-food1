import React, { useEffect, useState } from "react";
import { 
    ProfileMainContainer, 
    ProfileHeaderContainer, 
    ProfileHeaderTextContainer, 
    ProfileInfoContainer, 
    ProfileInfoAndIconContainer, 
    ProfileAddressContainer,
    ProfileAddressTextContainer,
    ProfileAddressIconContainer
    } from './styled'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

export default function ProfilePage() {

    const [ profile, setProfile ] = useState({})

    const url = `${BASE_URL}profile`

    useEffect(() => {
        axios.get(url, {headers: {
            auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik84QTJEQkxFNHcyRUR3bkZLeWJ2IiwibmFtZSI6IkNlc2FyIEh1YmVyIiwiZW1haWwiOiJjZXNhci5odWJlckBnbWFpbC5jb20iLCJjcGYiOiIzNDUuMjE0LjQ5OC00MCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NDE4NDExODJ9.dI6YxzHOm_yvmcGawCQA5_P39WUEky6jCqadlIBvhK8'
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
            Histórico de Pedidos
        </ProfileMainContainer>
    )
}