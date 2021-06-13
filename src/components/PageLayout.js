import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

export default function PageLayout({ children }) {

    return (
        <Container className="row">
            {children}
        </Container>
    )
}

const Container = styled.div`
    background: ${({ theme }) => theme.foreground};
    border-radius: ${({ theme }) => theme.borderRadius};
    z-index: 5;
    opacity: 0.95;
    padding: 1em;
    margin: 1em;
    width: calc(100% - 2em);
    overflow-x: hidden;
`