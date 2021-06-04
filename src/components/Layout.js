import * as React from "react"
import { useEffect, useState } from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby'
import { motion, AnimatePresence } from "framer-motion"
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import map from '../images/gnomonic-map.png'
import lines from '../images/gnomonic-lines.png'
import bg from '../images/bg-texture.png'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import leavesSound from '../images/dry-leaves.wav';

const data = [
    {
        title: 'Owls, Lemmings & Snow Cover', //1
        key: 'ArrowRight',
        path: '/owls-lemmings-snow',
        x: 20,
        y: 55
    },
    {
        title: 'Irruptions ', // 2
        key: 'ArrowDown',
        path: '/irruptions',
        x: 10,
        y: 40
    },
    {
        title: 'Population Decline',
        key: 'ArrowLeft',
        path: '/population-decline',
        x: 35, // 30, 20
        y: 30
    },
    {
        title: 'Physiology',
        key: 'ArrowUp',
        path: '/physiology',
        x: 70,
        y: 30
    },
    {
        title: 'Habitat',
        key: 'KeyA',
        path: '/habitat',
        x: 85,
        y: 50
    },
    {
        title: 'Territory',
        key: 'KeyW',
        path: '/territory',
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

const duration = 0.5;
const distance = 50;
const variants = {
    initial: {
        opacity: 0,
        x: distance,
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
        x: -distance * 4,
        transition: { duration: duration },
    },
}

const MAP_SIZE = 700;

const theme = {
    accentColor: '#f58916',
    borderRadius: '1em',
    foreground: 'white',
    middleground: '#f9f9f9f9',
    background: 'grey'
}

const PageContainer = styled(motion.div)`
    position: absolute;
    top: 1em;
    right: 1em;
    left: 1em;
    bottom: 1em;
    // pointer-events: none;
    opacity: 1;
`

const Container = styled(motion.div)`
`

const MapContainer = styled(motion.div)`
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    height: 100vh;
    background: url(${({ bg }) => bg}) no-repeat center;
    // filter: ${({ isHome }) => isHome ? 'blur(0)' : 'blur(12px)'};
    transform: ${({ isHome }) => isHome ? 'scale(1)' : 'scale(1.1)'};
    transition: 0.8s ease-in-out;
    background-size: cover;
    .lines {
        object-fit: cover;
        display: inline-block;
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        width: 100%;
        height: 100%;
        mix-blend-mode: multiply;
        pointer-events: none;
    }
`

const Map = styled.div`
    position: absolute;
    top: 50%; right: 0; bottom: 0; left: 50%;
    transform: translate(-50%, -50%) ;
    width: min(100%, ${MAP_SIZE}px);
    padding-bottom: min(100%, ${MAP_SIZE}px);
    .map {
        transform-origin: center;
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
    max-width: ${MAP_SIZE}px;
    padding-bottom: min(100%, ${MAP_SIZE}px);
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
    background: ${({ isCurrent }) => isCurrent ? 'yellow' : 'whitesmoke'};
    transform: ${({ isCurrent }) => isCurrent ? 'scale(1.3)' : 'scale(1)'};
    border: .5em solid ${({ theme }) => theme.accentColor};
    position: absolute;
    top: ${({ y }) => y}%;
    left: ${({ x }) => x}%;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
    transition: .2s ease-in-out;
    `

const Content = styled.div`
    position: fixed;
    z-index: 2;
    top: 0; right: 0; bottom: 0; left: 0;
    ${({ isVisible }) => {
        return !isVisible && `
            pointer-events: none;
            opacity: 0;
        `}
    }
`


const GlobalStyle = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
        font-family: 'Montserrat', sans-serif;
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

    h1, h2, h3, h4, h5, h6{
        font-family: comfortaa, sans-serif;
        font-weight: 700;
    }
    p, h1, h2 {
        line-height: 1.8em;
        
    }

    p::first-line{
        font-style: italic;
        font-weight: 700;
    }
    
    .infographic {
        @media(min-width: 700px){
            padding: 0 4em;
        }
    }

    svg {
        padding: 0;
        margin: 0;
    }
`

export default function Layout({ children, location }) {

    const [currentPage, setCurrentPage] = useState(false);

    function playSound() {
        const audio = new Audio(leavesSound);
        if (audio) {
            audio.volume = 0.1;
            audio.play();
        };

    }
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            const dataForKeyPress = data.find(d => d.key === e.code);
            // playSound();
            return dataForKeyPress && navigate(dataForKeyPress.path);
        })
    }, []);

    useEffect(() => { // Every time the path changes (a page is open or closed, run this sound effect)
        // playSound();
    }, [location.pathname])



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


                <MapContainer bg={bg} isHome={location.pathname === '/'}>

                    <img
                        className="lines"
                        src={lines}
                        alt=""
                    />

                    <Map>
                        <Points>
                            {data.map((d, i) => {
                                return d.title && (
                                    <Link
                                        key={d.title}
                                        to={d.path}
                                    >
                                        <Point
                                            x={d.x}
                                            y={d.y}
                                            isCurrent={location.pathname === d.path}
                                        >
                                            {/* {i + 1} */}
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
            file(relativePath: {eq: "gnomonic-map4.png"}) {
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