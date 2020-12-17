import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 1.5rem 0;
    font-size: 1.8rem;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 1.5rem;

    img {
        width: 100%;
        height: 100%;
    }
`
export const ItemName = styled.span`
    width: 23%;
    padding: 0.5rem;
`
export const ArrowIcon = styled.div`
    cursor: pointer;

`

export const QuantityContainer = styled.span`
    width: 23%;
    display: flex;
`

export const ItemsQuantity = styled.span`
    margin: 0 1rem;
`

export const Price = styled.span`
    width:23%;
`

export const RemoveBtn = styled.span`
    padding-left: 1.2rem;
    cursor: pointer;
`