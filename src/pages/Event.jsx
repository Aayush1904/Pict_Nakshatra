import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import EventCard from '../components/EventCard';
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 95vh;
  overflow-x: hidden;
  position: relative;
  overflow: hidden;
`;

const Event = () => {
  return (
    <>
    <Body>
        <EventCard />
    </Body>
    </>
  )
}

export default Event
