import * as React from "react"
import styled from 'styled-components';


const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: whitesmoke;
    padding: 0 1em;
    background-image: url(${(props) => props.bg});
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    
    button {
        padding: 1em;
    }
`
export default function Flight({ data, setSelection }) {

    return (
        <Container bg={data.img}>
            <h1>{data.title}</h1>
            <button
                onClick={() => setSelection(false)}
            >close</button>
        </Container>
    );

}