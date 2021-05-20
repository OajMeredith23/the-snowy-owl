import * as React from "react"
import { useState, useEffect } from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby'
import { motion, AnimatePresence } from "framer-motion"
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import map from '../images/gnomonic-map.png'
import lines from '../images/gnomonic-lines.png'
import bg from '../images/bg-texture.png'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const data = [
    {
        title: 'Route 1',
        key: 'ArrowDown',
        path: '/owl-1',
        x: 20, //40, 50
        y: 50
    },
    {
        title: 'Route 2',
        key: 'ArrowRight',
        path: '/owl-2',
        x: 0, // 40, 40 
        y: 30
    },
    {
        title: 'Route 3',
        key: 'ArrowLeft',
        path: '/owl-3',
        x: 30, // 30, 20
        y: 20
    },
    {
        title: 'Route 4',
        key: 'ArrowUp',
        path: '/owl-4',
        x: 70,
        y: 20
    },
    {
        title: 'Route 5',
        key: 'KeyA',
        path: '/owl-5',
        x: 90,
        y: 40
    },
    {
        title: 'Route 6',
        key: 'KeyW',
        path: '/owl-6',
        x: 80,
        y: 70
    },
];

const duration = 0.5

const variants = {
    initial: {
        opacity: 0,
        x: 200,
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            duration: duration,
            delay: duration,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        x: -200,
        transition: { duration: duration },
    },
}


const MAP_SIZE = '700px';

const theme = {
    accentColor: 'tomato',
    borderRadius: '1em',
    foreground: 'whitesmoke',
    middleground: '#f9f9f9f9',
    background: 'grey'
}

const PageContainer = styled(motion.main)`
    position: absolute;
    top: 1em;
    right: 1em;
    left: 1em;
    bottom: 1em;
    pointer-events: none;
    opacity: 1;
    ${({ isVisible }) => {
        console.log({ isVisible });
        return !isVisible && `
            pointer-events: none;
            opacity: 0;
        `}
    }
    z-index: 5;

`

const Container = styled(motion.div)`
`

const Map = styled(motion.div)`
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    padding: 2em;
    height: 100vh;
    background: url(${({ bg }) => bg}) no-repeat center;
    background-size: cover;

    .map {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); 
        width: 80%;
        max-width: ${MAP_SIZE};
    } 

    .lines {
        object-fit: cover;
        display: inline-block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        width: 100%;
        height: 100%;
    }
    
    `

const Content = styled.div`
    position: fixed;
    z-index: 2;
    top: 0; right: 0; bottom: 0; left: 0;
`

const Points = styled.div`
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    max-width: ${MAP_SIZE};
    max-height: ${MAP_SIZE};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Point = styled.button`
    padding: 1em;
    width: 50px;
    height: 50px;
    border-radius 50%;
    background: ${({ theme }) => theme.accentColor};
    position: absolute;
    top: ${({ y }) => y}%;
    left: ${({ x }) => x}%;
`

const GlobalStyle = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    button{
        border: none;
        outline: none;
    }
`

export default function Layout({ children, location }) {

    const [selection, setSelection] = useState(false);


    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            const dataForKeyPress = e.code === 'Space' ? false : data.find(d => d.key === e.code)
            setSelection(dataForKeyPress)
        })
    }, [])

    useEffect(() => {
        selection?.path && navigate(selection.path)
    }, [selection])
    useEffect(() => {
        console.log(location)
    }, [location])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Content>
                    <AnimatePresence>
                        <PageContainer
                            key={location?.pathname}
                            variants={variants}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            isVisible={location.pathname !== '/'}
                        >
                            {children}
                        </PageContainer>
                    </AnimatePresence>

                    <Points>
                        {data.map(d => {
                            return (
                                <Link key={d.title} to={d.path}>
                                    <Point
                                        x={d.x}
                                        y={d.y}
                                    >
                                        {d.title}
                                    </Point>
                                </Link>
                            )
                        })}
                    </Points>
                </Content>


                <Map bg={bg}>
                    <img
                        className="lines"
                        src={lines}
                        alt=""
                    />
                    <MapImage />
                </Map>
            </Container >
        </ThemeProvider>
    )
}

const MapImage = () => {

    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "gnomonic-map.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 1200
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    `);

    const image = getImage(data.file)

    return <GatsbyImage
        className="map"
        image={image}
        alt="Gnomonic projection of the Arctic"
    />
}