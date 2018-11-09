// This is an example of using Styled Components.

import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
    margin: 100px 0 0 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 600px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 620px;
    }
`
const SectionLogo = styled.img`
    width: 128px;
    margin: 0 auto;
    align-self: end;

    @media (max-width: 640px) {
        
    }
`
const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    align-items: start;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 100%;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        padding: 0 0 0 30px;
    }
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 640px) {
        font-size: 30px;
    }

`
const SectionText = styled.p`
    color: white;
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop>
            <Wave />
        </WaveTop>
        <SectionLogo src={props.logo} alt={props.alt} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <WaveBottom>
            <Wave />
        </WaveBottom>
    </SectionGroup>
)

export default Section