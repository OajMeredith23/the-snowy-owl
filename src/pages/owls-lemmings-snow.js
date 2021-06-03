import React from 'react';
import Layout from '../components/Layout'
import { Container, Text, Graphic } from '../components/UI_Elements'
import { StaticImage } from 'gatsby-plugin-image'
import PageLayout from '../components/PageLayout'
import * as d3 from 'd3';
import { Radar } from 'react-chartjs-2'
import owlLemmingImg from '../images/lemmings-owl-pop.png'


const OwlsLemmingsAndSnow = () => {


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
            label: 'Owl Population',
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

                //  5, 30, 5, 5, 10, 10, 5, 20, 10
            ],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
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


                // 20, 10, 10, 15, 5, 30, 35, 30, 5, 4, 5, 18, 40,
                //  5, 40, 5, 15, 30, 10, 5, 5, 40
            ],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
        }]
    };

    return (
        <PageLayout>
            <Container className="row">
                <Text className="col-lg-3">
                    <h1>Owls, Lemmings & Snow cover</h1>
                </Text>
                <Graphic className="col-lg-9" bg={owlLemmingImg}>

                    <div className="square">

                        <div className="chart">
                            <Radar
                                data={data}
                                options={{
                                    scales: {
                                        r: {
                                            ticks: {
                                                display: false,
                                                color: 'red'
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
                                            display: false,
                                            position: 'right',
                                            labels: {
                                                color: 'rgb(255, 99, 132)'
                                            }
                                        }
                                    },
                                    elements: {
                                        line: {
                                            borderWidth: 3
                                        }
                                    }
                                }}
                            />

                        </div>
                    </div>

                </Graphic>
            </Container>
        </PageLayout >
    )
}

export default OwlsLemmingsAndSnow