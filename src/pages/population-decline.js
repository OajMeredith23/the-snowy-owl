import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import { Text, Container, Graphic, Credit } from '../components/UI_Elements';

export default function OwlOne() {
    return (
        <PageLayout>
            <Container className="row">

                <Text className="col-lg-3">
                    <h1>Population Decline</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam adipisci necessitatibus culpa nam iste a quibusdam, explicabo corporis libero.
                </p>
                </Text>

                <Graphic className="col-lg-9">
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
