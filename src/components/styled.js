import styled from 'styled-components'

export const FooterMainContainer = styled.div`
    width: 100%;
    height: 49px;
    position: fixed;
    bottom: 0;
    display: flex;
    box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
`

export const FooterNavContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OrderHistoryMainContainer = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const OrderHistoryItemContainer = styled.div`
    width: calc(91.12% - 8.88vw);
    height: calc(102px - 8.88vw);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 10px;
    padding: 4.4%;
    h1{
        margin: 0;
        font-size: 16px;
        color: #e86e5a;
        font-weight: 400;
    }
    h2{
        margin: 0;
        font-size: 16px;
    }
    p{
        margin: 0;
        font-size: 12px;
    }
`