import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';

export default function OwlOne() {
    return (
        <PageLayout>
            <Container>
                <Text>
                    <h1>Population Decline</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam adipisci necessitatibus culpa nam iste a quibusdam, explicabo corporis libero.
                </p>
                </Text>
                <StaticImage
                    src="../images/pop-feathers.png"
                    placeholder="blurred"
                // height={'100%'}
                />
            </Container>
        </PageLayout>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    .gatsby-image-wrapper{
        img {
            object-fit: contain;
        }
    }
`
const Text = styled.div`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
