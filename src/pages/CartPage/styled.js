import styled from 'styled-components'

export const DivMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

export const DivHeader = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
`

export const DivAdress = styled.div`
    /* border: 1px solid black;
    display: flex;
    width: 368px;
    height: 76px;
    margin: 1px 0 16px;
    padding: 16px;
    background-color: #b8b8b8;
    align-items: center;
    justify-content: flex-start; */
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 76px;
    margin: 1px 0 16px;
    padding: 16px;
    background-color: #eee;
`

export const Span1 = styled.span`
    width: 328px;
    height: 18px;
    margin: 0 0 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Span2 = styled.span`  
    width: 328px;
    height: 18px;
    margin: 8px 0 0;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000;
`

export const Span3 = styled.span`  
    width: 328px;
    height: 18px;
    margin: 16px 16px 8px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--dark-peach);
`
export const Span4 = styled.span`  
    width: 328px;
    height: 18px;
    margin: 8px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`
export const Span5 = styled.span`
    width: 328px;
    height: 18px;
    margin: 8px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`

export const Span6 = styled.span`
    width: 104px;
    height: 18px;
    margin: 16px 16px 13px 245px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #000;
`

export const Span7 = styled.span`
  width: 164px;
  height: 18px;
  margin: 15px 0 25px 16px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000;
`
export const Span8 = styled.span`
  width: 164px;
  height: 21px;
  margin: 13px 16px 24px 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: var(--dark-peach);
`

export const Span9 = styled.span`
    width: 328px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: var(--dark-peach);

`

export const DivRestaurant = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 120px;
    align-items: flex-start;
    
`

export const DivItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 15px 15px;
`
export const DivItem = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 200px;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 15px 0;
`
export const DivImage = styled.div`
    display: flex;
    width: 300px;
    height: 125%;
    align-items: flex-start;
    justify-content: flex-start;
`
export const DivDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    
    span{
        margin: 7px 0;
    }
`

export const DivDelivery = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    align-items: center;
    justify-content: flex-start;
`

export const DivSubTotal = styled.div`
    display: flex;
    width: 100%;
    height: 180px;
    align-items: center;
    justify-content: space-evenly;
    
`

export const DivPaymentMethods = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    align-items: flex-start;

    div{
        text-align: left
    }
`
export const ImG = styled.img`
    width: 80%;
    height: 80%;
`

export const DivButton = styled.div`
    display: flex;
    width: 328px;
    height: 42px;
    padding: 12px 16px;
    border-radius: 2px;
    background-color: var(--dark-peach);
`

export const Button = styled.button`
    width: 345px;
    height: 30px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
`

export const DivScroll = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    } */
`