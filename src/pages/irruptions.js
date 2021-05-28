import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import PageLayout from '../components/PageLayout'
const Irruptions = () => {
    return (
        <PageLayout>
            <Container>
                <Text>
                    <h1>Irruptions</h1>
                </Text>
                <div className="img">
                    <StaticImage
                        src="../images/irruption-map.png"
                        placeholder="blurred"
                        width={1200}
                    />
                </div>
            </Container>
        </PageLayout>
    )
}

const Container = styled.div`
    display: grid;
    width: 100%; 
    height: 100%;
    grid-template-columns: 1fr 2fr;
    .img {
        display: flex;
        align-items: center;
        justify-content: center;
        .gatsby-image-wrapper{
            max-width: 700px;
        }
    }
   
`
const Text = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


export default Irruptions