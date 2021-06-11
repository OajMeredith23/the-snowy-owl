import React from 'react';
import PageLayout from '../components/PageLayout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Text, Graphic } from '../components/UI_Elements'
import airportGraphic from '../images/airport.png'

const Habitat = () => {

    return (
        <PageLayout>
            <Container className="row" bg={airportGraphic}>

                <Text className="row col-lg-12 d-flex justify-content-center ">

                    <div className="col-md-6 col-lg-4">
                        <h1 className="text-center">Habitat</h1>
                        <p className="text-center">
                            The Arctic Tundra that snowy owls inhabit exists largely above the tree line; open, flat spaces that are covered by grass in summer and snow in winter are where the snowy owl feels most comfortable.
                            <br />
                            They hunt for their prey by swooping above the open ground, picking out small rodents in the snow or grass before swooping down and grabbing them in their talons.
                            <br />
                            As snowy owls and human settlements have converged, the owls have found a similar environment to their native habitat in airports. The wide open spaces, and the snowy owls seeming indifference to thundering aeroplanes, make the huge flat spaces surrounding airport runways feel just like home for these owls.
                        </p>
                    </div>

                </Text>

            </Container>
        </PageLayout>
    )
}

const Container = styled.div`
    background-image: url(${({ bg }) => bg});
    height: calc(100vh - 4em);
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;
`

const BackgroundGrid = styled.div`
    position: absolute;
    left: 0;
    right: 0; 
    bottom: .5em;
    top: 0;
    padding: 0 1em;
    z-index: 2;
    .col-md-3{
        border-left: .25em dashed lightgrey;
        &:last-child{
            border-right: 1px dashed lightgrey;
        }
        position: relative;
        &::after{
            content: '';
            position: absolute;
            top: 0;
            left: .5em;
            right: .5em;
            bottom: .5em;
            background: rgba(235,235,235, 0.2);
        }
    }
`

const MapContainer = styled.div`
    position: relative;
    height: 100%;
`

const MapAndText = styled.div`
    padding: 0 1em;
    p {
        position: relative;
        z-index: 3;
        border-left: .25em solid ${({ theme }) => theme.accentColor};
        padding: 1em;
    }
`

export default Habitat