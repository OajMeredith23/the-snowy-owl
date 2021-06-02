import * as React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 4em);
    // > * {
    //     border: 2px dashed;
    // }
`

export const Graphic = styled.div`
    height: calc(100vh - 4em);
    position: relative;

`
export const Credit = styled.small`
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    // text-align: center;
`


export const Text = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3em 1em;
`