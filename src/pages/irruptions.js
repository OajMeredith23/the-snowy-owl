import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Text, Container, Graphic } from '../components/UI_Elements'
import PageLayout from '../components/PageLayout'


const Irruptions = () => {
    return (
        <PageLayout>
            <Text
                fullHeight
                className="col-lg-4 bg"
            >
                <h1>Irruptions</h1>
                <figure className="row">
                    <p className="col-md-6 col-lg-10">
                        Every four or five years an irruption occurs, when young, curious, and fattened up snowy owls travel thousands of miles into areas they’d otherwise never be seen.
                        <br />
                        No one knows exactly why this happens, but we do know it coincides with an increase in the overall population that is triggered by an increase in the amount of their favorite prey: lemmings.
                    </p>
                    <div className="img col-md-6 col-lg-12">
                        <StaticImage src="../images/owl-in-snow.jpeg" />
                    </div>
                </figure>
            </Text>

            <Graphic className="col-lg-8 infographic">
                <StaticImage
                    src="../images/irruption-map.png"
                    placeholder="blurred"
                    height={700}
                />
            </Graphic>
        </PageLayout>
    )
}


export default Irruptions