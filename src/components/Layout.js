import * as React from "react"
import { useEffect, useState, useContext } from 'react';
import { Link, navigate, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion"
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import queryString from 'query-string'
import FeatherIcon from 'feather-icons-react';

import map from '../images/gnomonic-map.png'
import lines from '../images/gnomonic-lines.png'
import bg from '../images/bg-texture.png'
import leavesSound from '../images/dry-leaves.wav';

export const MapContext = React.createContext({ withMap: false });

const pages = [
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
    // {
    //     title: 'Physiology',
    //     key: 'ArrowUp',
    //     path: '/physiology',
    //     x: 70,
    //     y: 30
    // },
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
    borderRadius: '.5em',
    foreground: 'white',
    middleground: '#f9f9f9f9',
    background: '#f7f7f7'
}


export default function Layout({ children, location }) {

    const [currentPage, setCurrentPage] = useState(false);

    const [withMap, setWithMap] = useState(false);

    useEffect(() => {
        setWithMap(queryString.parse(location.search).withmap === 'true')
    }, []);

    function playSound() {
        const audio = new Audio(leavesSound);
        if (audio) {
            audio.volume = 0.1;
            audio.play();
        };

    }
    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            const dataForKeyPress = pages.find(d => d.key === e.code);
            return dataForKeyPress && navigate(dataForKeyPress.path);
        })
    }, []);

    useEffect(() => { // Every time the path changes (a page is open or closed, run this sound effect)
        // playSound();
    }, [location.pathname])


    const [currPage, setCurrPage] = useState(null);

    useEffect(() => {
        setCurrPage(pages.findIndex(page => page.path === location.pathname))
    }, [location]);


    return (
        <ThemeProvider theme={theme}>
            {/* <MapContext.Provider value={{ withMap }}> */}
            <GlobalStyle />

            {location.pathname !== '/' && !withMap &&
                <Nav>
                    {!!pages[currPage - 1]?.path &&
                        <Link to={pages[currPage - 1]?.path}>
                            <FeatherIcon icon="chevron-left" />
                        </Link>
                    }
                    {pages[currPage + 1]?.path.length > 1 &&
                        <Link to={pages[currPage + 1]?.path}>
                            <FeatherIcon icon="chevron-right" />
                        </Link>
                    }
                    <Link to="/">
                        <FeatherIcon icon="x" />
                    </Link>
                </Nav>
            }

            <Container>

                <Content
                    isVisible={location.pathname !== '/'}
                >
                    <AnimatePresence>
                        <PageContainer
                            key={location?.pathname}
                            withMap={withMap}
                            variants={variants}
                            initial="initial"
                            animate="enter"
                            exit="exit"

                        >
                            {children}
                        </PageContainer>
                    </AnimatePresence>
                </Content>

                <HomePage
                    isHome={location.pathname === '/'}
                    className="row" bg={bg}>

                    <Titles className="col-lg-4 row d-flex justify-content-center">
                        <div className="row col-md-12 col-lg-9" >
                            <h1 className="">The Snowy Owl</h1>

                            <p className="col-md-6 col-lg-12">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta blanditiis aut, animi laborum libero, dolorem delectus quas necessitatibus, nemo natus impedit minima? Eaque eius cupiditate exercitationem similique repellendus, voluptatem earum iure omnis, rem possimus sint odit ut voluptatibus, in sit.
                            </p>
                        </div>
                    </Titles>

                    <MapContainer
                        className="col-lg-8"
                    >
                        <img
                            className="lines"
                            src={lines}
                            alt=""
                        />

                        <Map>
                            <Points>
                                {pages.map((d, i) => {
                                    return d.title && (
                                        <Link
                                            key={d.title}
                                            to={d.path}
                                        >
                                            <Point
                                                x={d.x}
                                                y={d.y}
                                                isCurrent={location.pathname === d.path}
                                            />
                                        </Link>
                                    )
                                })}
                            </Points>
                            <MapImage />
                        </Map>

                    </MapContainer>
                </HomePage>
            </Container >
            {/* </MapContext.Provider> */}
        </ThemeProvider >
    )
}

const Nav = styled.div`
    position: fixed;
    top: 2em;
    right: 2em;
    // left: calc(100% - 6em);
    z-index: 10;
`

const PageContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 1;
`

const Container = styled(motion.div)`
    // position: fixed;
    // top: 0; left: 0; right: 0; bottom: 0;
    // padding: 1em;
    // overflow-y: scroll;
    `

const MapContainer = styled(motion.div)`
    min-height: calc(100vh - 1em);
    // overflow-y: scroll;
    background: url(${({ bg }) => bg}) no-repeat center;
    filter: ${({ isHome }) => isHome ? 'blur(0)' : 'blur(0)'};
    transition: 0.8s ease-in-out;

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
    position: relative;
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
        line-height: 2em;
    }
    p{
        margin-bottom: 0;
    }

    a {
        color: inherit;
        &:hover{
            color: ${({ theme }) => theme.accentColor};
        }
    }
    
    strong {
        font-weight: 700; 
    }
    .infographic {
        @media(min-width: 700px){
            padding: 0 4em;
        }
    }

    img {
        border-radius: ${({ theme }) => theme.borderRadius};
    }

    svg {
        padding: 0;
        margin: 0;
    }
`

const HomePage = styled.div`
    background: url(${({ bg }) => bg}) no-repeat center;
    background-size: cover;
    filter: ${({ isHome }) => isHome ? 'blur(0)' : 'blur(8px)'};
    transition: 0.8s ease-in-out;
`

const Titles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1em;
`

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