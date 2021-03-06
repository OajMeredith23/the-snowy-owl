import React from 'react';
import Layout from '../components/Layout'
import { Container, Text, Graphic } from '../components/UI_Elements'
import { StaticImage } from 'gatsby-plugin-image'
import PageLayout from '../components/PageLayout'
import { Helmet } from "react-helmet"
import { Radar } from 'react-chartjs-2'
import owlLemmingImg from '../images/lemmings-owl-pop.png'


const OwlsAndLemmings = () => {

    const data = {
        labels: [
            '1992',
            '1994',
            '1996',
            '1998',
            '2000',
            '2002',
            '2004',
            '2006',
            '2008',
            '2010',
            '2012',
            '2014',
            '2016',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ],
        datasets: [{
            label: 'Snowy Owl Nests',
            data: [
                //     '1992',
                15,
                // '1994',
                20,
                // '1996',
                10,
                // '1998',
                30,
                // '2000',
                10,
                // '2002',
                10,
                // '2004',
                30,
                // '2006',
                20,
                // '2008',
                10,
                // '2010',
                30,
                // '2012',
                15,
                // '2014',
                10,
                // '2016',
                30

            ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: '#ea8513',
            pointBackgroundColor: 'whitesmoke',
            pointBorderColor: '#fff',
        }, {
            label: 'Lemming Population',
            data: [
                //     '1992',
                20,
                // '1994',
                10,
                // '1996',
                10,
                // '1998',
                15,
                // '2000',
                15,
                // '2002',
                30,
                // '2004',
                35,
                // '2006',
                30,
                // '2008',
                15,
                // '2010',
                20,
                // '2012',
                5,
                // '2014',
                18,
                // '2016',
                30,
            ],
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
        }]
    };

    return (
        <PageLayout>

            <Helmet>
                <title>Owls & Lemmings | The Snowy Owl</title>
            </Helmet>

            <Text
                fullHeight
                className="col-lg-4 bg"
            >
                <h1>Owls & Lemmings</h1>
                <figure className="row">
                    <p className="col-md-6 col-lg-10">
                        Snowy owls are not fussy eaters, but there???s one prey they enjoy more than any other: lemmings. Every four or so years the lemming population will explode, this sudden abdundance of food leads to an increase in snowy owl chicks and a boom in the population of owls.
                        <br />
                        But, lemmings like to breed deep beneath the snow, and with deep snow cover becoming increasingly infrequent their numbers may beging to dwindle, and the snowy owls may follow.
                    </p>
                    <div className="col-md-6 col-lg-12">
                        <StaticImage src="https://upload.wikimedia.org/wikipedia/commons/5/59/Snowy-Owl.1.jpg"></StaticImage>
                    </div>
                </figure>
            </Text>

            <Graphic className="col-lg-8 d-sm-none d-md-flex" bg={owlLemmingImg}>

                <div className="square">
                    <div className="chart">
                        <Radar
                            data={data}
                            options={{
                                scales: {
                                    r: {
                                        ticks: {
                                            display: false,
                                        }
                                    }
                                },

                                plugins: {
                                    tooltip: {
                                        enabled: false
                                    },
                                    ticks: {
                                        color: 'red',
                                        display: false
                                    },
                                    legend: {
                                        // display: false,
                                        position: 'top',

                                        font: {
                                            size: 14
                                        }
                                    }
                                },
                                elements: {
                                    line: {
                                        borderWidth: 2
                                    }
                                }
                            }}
                        />

                    </div>
                </div>

            </Graphic>
        </PageLayout >
    )
}

export default OwlsAndLemmings