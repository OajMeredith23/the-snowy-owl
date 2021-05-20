import * as React from 'react';
import styled from 'styled-components';


export default function PageLayout({ children }) {

    return (
        <Container>
            <h1>PageLayout</h1>
            {children}
        </Container>
    )
}

const Container = styled.div`
    background: ${({ theme }) => theme.foreground};
    border-radius: ${({ theme }) => theme.borderRadius};
    position: absolute;
    z-index: 5;
    top: 0; left: 0; right: 0; bottom: 0; 


`