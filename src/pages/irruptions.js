import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Text } from '../components/UI_Elements'
import PageLayout from '../components/PageLayout'

const Irruptions = () => {
    return (
        <PageLayout>
            <div className="row">
                <Text className="col-lg-3">
                    <h1>Irruptions</h1>
                    <p>
                        <em>Every four or five years an irruption occurs,</em> when young, curious, and fattened up snowy owls travel south into areas they’d otherwise never be seen.
                    <br />
                    No one knows exactly why this happens, but we do know it coincides with an increase in the overall population that is triggered by an increase in the amount of their favorite prey: lemmings.
                    </p>
                </Text>
                <div className="col-lg-9 infographic">
                    <StaticImage
                        src="../images/irruption-map.png"
                        placeholder="blurred"
                    // width={1200}
                    />
                </div>
            </div>
        </PageLayout>
    )
}


export default Irruptions