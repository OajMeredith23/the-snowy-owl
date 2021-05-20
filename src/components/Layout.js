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
        y: 55
    },
    {
        title: 'Route 2',
        key: 'ArrowRight',
        path: '/owl-2',
        x: 20, // 40, 40 
        y: 30
    },
    {
        title: 'Route 3',
        key: 'ArrowLeft',
        path: '/owl-3',
        x: 35, // 30, 20
        y: 30
    },
    {
        title: 'Route 4',
        key: 'ArrowUp',
        path: '/owl-4',
        x: 70,
        y: 30
    },
    {
        title: 'Route 5',
        key: 'KeyA',
        path: '/owl-5',
        x: 85,
        y: 50
    },
    {
        title: 'Route 6',
        key: 'KeyW',
        path: '/owl-6',
        x: 60,
        y: 70
    },
    {
        title: false,
        key: 'Space',
        path: '/',
    },
    {
        title: false,
        key: 'Escape',
        path: '/',
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


const MAP_SIZE = '900px';

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
    

`

const Container = styled(motion.div)`
`


const MapContainer = styled(motion.div)`
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    height: 100vh;
    background: url(${({ bg }) => bg}) no-repeat center;
    background-size: cover;
    .lines {
        object-fit: cover;
        display: inline-block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        width: 100%;
        height: 100%;
    }
    
    `

const Map = styled.div`
    position: absolute;
    top: 50%; right: 0; bottom: 0; left: 50%;
    transform: translate(-50%, -50%);
    width: min(100%, ${MAP_SIZE});
    padding-bottom: min(100%, ${MAP_SIZE});
    
    .map {
        width: 100%;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
    } 
`




const Points = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: ${MAP_SIZE};
    padding-bottom: min(100%, ${MAP_SIZE});
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

const Content = styled.div`
    position: fixed;
    z-index: 2;
    top: 0; right: 0; bottom: 0; left: 0;
    ${({ isVisible }) => {
        console.log({ isVisible });
        return !isVisible && `
            pointer-events: none;
            opacity: 0;
        `}
    }
    z-index: 5;
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



    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            console.log(e.code)
            const dataForKeyPress = data.find(d => d.key === e.code)
            return dataForKeyPress && navigate(dataForKeyPress.path);
        })
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Container>
                <Content isVisible={location.pathname !== '/'}>
                    <AnimatePresence>
                        <PageContainer
                            key={location?.pathname}
                            variants={variants}
                            initial="initial"
                            animate="enter"
                            exit="exit"

                        >
                            {children}
                        </PageContainer>
                    </AnimatePresence>

                </Content>


                <MapContainer bg={bg}>
                    <img
                        className="lines"
                        src={lines}
                        alt=""
                    />
                    <Map>
                        <Points>
                            {data.map(d => {
                                return d.title && (
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
                        <MapImage />
                    </Map>
                </MapContainer>
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
                        width: 1700
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