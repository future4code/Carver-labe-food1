import React from 'react'
import { LoadingContainer } from './styles'
import Skeleton from '@mui/material/Skeleton'

export default function LoadingCard() {
    return (
        <LoadingContainer>
            <Skeleton animation="wave" variant="rectangular" width={200} height={100} />
        </LoadingContainer>
    )
}
