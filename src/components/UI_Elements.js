import * as React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    z-index: 10;
`

export const Graphic = styled.div`
    height: calc(100vh - 4em);
    position: relative;
    padding: 0 1em;
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
    left: 1em;
    right: 0;
    bottom: 0;
    
`


export const Text = styled.div`

    border-radius: ${({ theme }) => theme.borderRadius};
    &.bg{
        background ${({ theme }) => theme.background};
        border-right: .05px solid ${({ theme }) => theme.middleground};
    }
    figure img {
        display: inline-block;
        margin: 1em 0;
    }
    
`