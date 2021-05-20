import * as React from "react"
import { useState, useEffect } from 'react';

import Layout from '../components/Layout'
import Section from '../components/Section'
import styled from 'styled-components';
import { Link } from 'gatsby'

// import snowy from '../images/snowy.jpg'
// import snowy1 from '../images/snowy-1.jpg'
// import snowy2 from '../images/snowy-2.jpg'
// import snowy3 from '../images/snowy-3.jpg'

// const data = [
//   {
//     title: 'Route 1',
//     key: 'ArrowDown',
//     img: snowy
//   },
//   {
//     title: 'Route 2',
//     key: 'ArrowRight',
//     img: snowy1
//   },
//   {
//     title: 'Route 3',
//     key: 'ArrowUp',
//     img: snowy2
//   },
//   {
//     title: 'Route 4',
//     key: 'ArrowLeft',
//     img: snowy3
//   },
//   {
//     title: 'Route 5',
//     key: 'KeyW',
//     img: snowy1
//   },
//   {
//     title: 'Route 6',
//     key: 'KeyA',
//     img: snowy2
//   },
// ];

const IndexPage = () => {
    // const [selection, setSelection] = useState(false);

    // useEffect(() => {
    //   window.addEventListener('keydown', (e) => {
    //     const dataForKeyPress = e.code === 'Space' ? false : data.find(d => d.key === e.code)
    //     setSelection(dataForKeyPress)
    //   })
    // }, [])

    // useEffect(() => {
    //   console.log(selection);
    //   navigate(selectin.page)

    // }, [selection])

    return (
        <h1>about</h1>
    )
}

const Map = styled.div`
  height: 90vh;
  position: relative;
`

export default IndexPage
