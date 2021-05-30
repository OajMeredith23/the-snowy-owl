import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import { Text } from '../components/UI_Elements';

export default function OwlOne() {
    return (
        <PageLayout>
            <div className="row">
                <Text className="col-lg-3">
                    <h1>Population Decline</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam adipisci necessitatibus culpa nam iste a quibusdam, explicabo corporis libero.
                </p>
                </Text>
                <div className="col-lg-9 infographic">
                    <StaticImage
                        src="../images/pop-feathers.png"
                        placeholder="blurred"
                        alt="A series of feathers, each becoming increasingly diminished to represent the falling snowy owl population"
                    />
                </div>
            </div>
        </PageLayout>
    )
}
