import React from 'react';
import PageLayout from '../components/PageLayout'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Text } from '../components/UI_Elements'
const Territory = () => {
    return (
        <PageLayout>
            <Container
            // style={{ position: 'absolute', top: '1em', left: '1em', right: '1em', bottom: '1em' }}
            >


                <Text className="row">
                    <h1 className="col-12">Territory</h1>
                    <div className="row col-12">
                        <div className="row col-md-10">
                            <p className="col-10 col-lg-6">
                                Snowy owls are found across the northern hemisphere, with birds being seen from Cornwall to Greenland, and everywhere in between the long way round.
                            </p>

                        </div>
                        {/* <div className="col-md-2 d-none d-md-inline">
                            <StaticImage
                                className="image"
                                src="../images/owl-logo.png"
                                style={{
                                    height: '100px',
                                }}
                                imgStyle={{
                                    maxHeight: '100px',
                                }}
                            />
                        </div> */}
                    </div>
                </Text>

                <MapContainer>
                    {/* <div> */}
                    <BackgroundGrid className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>

                    </BackgroundGrid>
                    <MapAndText className="row">
                        <p className="col-md-3">
                            Snowy owls can cover vast ranges; an owl nesting in Alaska may have spent the previous year on the far side of the American continent
                        </p>
                        <p className="col-md-3">
                            whilst an owl nesting in Greenland may migrate into the Canadian Arctic the following year.                            </p>
                        <p className="col-md-3">
                            In 2017 a snowy owl travelled down to Cornwall in the UK. No one’s sure why it came, or why a few months later it decided to leave.
                        </p>
                        <p className="col-md-3">
                            Owls have been known to cross the Bering sea from Alaska into Russia and deep into Siberia, where the open spaces and cold climate match their North American range.
                        </p>
                        <div className="col-12">
                            <StaticImage
                                src="../images/territorymap2.png"

                            />
                        </div>
                    </MapAndText>
                    {/* </div> */}
                </MapContainer>

            </Container>
        </PageLayout>
    )
}

const Container = styled.div`
    display: flex;
    min-height: calc(100vh);
    flex-direction: column; 
    justify-content: space-around;
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

export default Territory