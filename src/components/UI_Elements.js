import * as React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 4em);
    position: relative;
    z-index: 10;
    > * {
        border: 1px dashed lightblue;
    }
`

export const Graphic = styled.div`
    height: calc(100vh - 4em);
    position: relative;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .square {
        position: relative;
        @media(min-width: 768px){
            background-image: url(${({ bg }) => bg && bg});
            background-size: 95%;
            background-repeat: no-repeat;
            background-position: left;
            width: 77vmin;
            height: 77vmin;
        }
        .chart{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
`
export const Credit = styled.small`
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`


export const Text = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3em 1em;
`