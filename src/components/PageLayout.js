import * as React from 'react';
import styled from 'styled-components';


export default function PageLayout({ children }) {

    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    background: ${({ theme }) => theme.foreground};
    border-radius: ${({ theme }) => theme.borderRadius};
    // position: absolute;
    z-index: 5;
    // top: 0; left: 0; right: 0; bottom: 0; 
    opacity: 0.95;
    padding: 1em;
    min-height: 100vh;
`