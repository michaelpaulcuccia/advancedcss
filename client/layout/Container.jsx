import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
    padding-left: 24px;
    padding-right: 24px;
    max-width: 1040px;
    margin-left: auto;
    margin-right: auto;
`;

export default function Container({ children, className }) {
  return (
    <ComponentWrapper className={className}>{children}</ComponentWrapper>
  )
}
