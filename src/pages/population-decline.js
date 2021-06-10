import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import { Text, Container, Graphic, Credit } from '../components/UI_Elements';

export default function OwlOne() {
    return (
        <PageLayout>
            <Container className="row">

                <Text className="col-lg-4 bg">

                    <h1 className="col-12">Population Decline</h1>

                    <p className="col-12">
                        Current threat status: <strong>Vulnerable</strong>
                    </p>

                    <figure className="row">
                        <p className="col-md-6 col-lg-12">
                            Global snowy owl populations used to be estimated at over 200,000 inidivduals, but in 2013 that changed. Their population was re-estimated, and put at 24,000. Since then further re-estimates have put that number as low as 13,000.
                        <br />
                        Climate change, loss of habitat, and dwindling food sources are likely causes of this population decline. But, we also simply don’t know, the snowy owls remote territory make them incredibly difficult to understand.
                    </p>
                        <div className="col-md-6 col-lg-12">
                            <StaticImage src="../images/owl-with-prey.jpeg" />
                        </div>
                    </figure>
                </Text>

                <Graphic className="col-lg-8 col-md-12">
                    <StaticImage
                        src="../images/pop-feathers.png"
                        placeholder="blurred"
                        alt="A series of feathers, each becoming increasingly diminished to represent the falling snowy owl population"
                    />
                    <Credit>
                        Illustration Credit: David Schierer, <a href="https://www.dswatercolors.com/gallery/image/snowy-owl-feather-painting" target="_blank" rel="noopener noreferrer">www.dswatercolors.com/gallery/image/snowy-owl-feather-painting</a>
                    </Credit>
                </Graphic>
            </Container>
        </PageLayout>
    )
}
