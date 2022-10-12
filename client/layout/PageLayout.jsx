import React from 'react';
//import styled from 'styled-components';
import Container from './Container';
import Header from './Header';

export default function PageLayout({ children }) {
  return (
    <>
      <Container>
        <Header />
          {children}
      </Container>
    </>
  )
}
