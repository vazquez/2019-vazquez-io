import React from 'react'
import styled from 'styled-components'
import './Cell.scss'

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: #212C4F;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
`

const Cell = props => (
    <div className="CellGroup">
        <CellImage image={props.image}></CellImage>
        <div className="CellTitle">{props.title}</div>
    </div>
    
)
export default Cell