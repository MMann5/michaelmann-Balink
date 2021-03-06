import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'


const WrapperBtn = styled.div`
    text-align: center;
`;

const Btn = styled.button`
    background-color: var(--clr2);
    border-radius: var(--borderRad2);
    cursor: pointer;
    margin: 20px;
    padding: 1em 2em;
    font-weight: bold;
        &:hover,&:focus {
            background-color: var(--clr3);
            box-shadow: 0 0 40px 40px var(--clr4) inset;
        }
    @media (max-width: 768px) {
        text-align: center;
        width: 90%;
        margin-top: 20px; 
    }
`;


export default function BackBtn() {
    const { t } = useTranslation()
    return (
        <WrapperBtn>
            <Btn className="go-back"><Link to="/">{t('back')}</Link></Btn>
        </WrapperBtn>
    )
}


