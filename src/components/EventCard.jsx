import React, { useRef } from "react";
import styled from "styled-components";
import { ChevronRight, ChevronsRight } from 'lucide-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  width: 50%;
  position: relative;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.borderColor || 'transparent'};
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  color: white;
  overflow: hidden;
  transition: all 0.3s;
  
  &.dark {
    background-color: black;
    border: 0;
    color: white;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Figure = styled.figure`
  width: 100%;
  height: 250px; /* Adjust height as needed */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  overflow: hidden;
`;

const StyledImage = styled('img')`
  height: 100%;
  width: 100%;
  transform: scale(1.05);
  transition: all 0.3s;
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
  object-fit: cover;

  ${CardContainer}:hover & {
    transform: scale(1);
  }
`;

const Content = styled.div`
  padding: 1rem;
  transition: all 0.3s;
  background-color: transparent;
`;

const DateText = styled.span`
  font-size: 0.875rem; /* Equivalent to text-sm */
`;

const Titles = styled.h1`
  font-size: 1.125rem; /* Equivalent to text-lg */
  font-weight: 500; /* Equivalent to font-medium */
  text-transform: capitalize;
`;


const ReadMoreLink = styled.a`
  background-color: #38a169; /* Equivalent to bg-green-400 */
  width: fit-content;
  font-size: 1rem; /* Equivalent to text-base */
  color: ${({ theme }) => theme.linkColor || '#2b6cb0'}; /* Default to blue-600 */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  font-weight: normal;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  align-items: center;

  &:hover {
    background-color: #2f855a; /* Darker green on hover */
  }
`;

const IconContainer = styled.span`
  position: relative;
`;

const ChevronRightIcon = styled(ChevronRight)`
  transition: all 0.3s;
  align-item: center;
`;

const Contact = () => {
  
  
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Event</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Event Description
        </Desc>

        <CardContainer className="group">
      <Figure>
        <StyledImage
          src={
            'https://images.unsplash.com/photo-1565759732117-a48f0bedbbfd?q=80&w=1000&auto=format&fit=crop'
          }
          alt="shoes"
          width={600}
          height={600}
        />
      </Figure>
      <Content>
        <DateText>3 Jan 2025</DateText>
        <Titles>
          Events
        </Titles>
        <ReadMoreLink href="#">
          Read Story
          <IconContainer>
            <ChevronRightIcon className="group-hover:opacity-0 opacity-100 translate-y-0 group-hover:translate-y-2" />
            
          </IconContainer>
        </ReadMoreLink>
      </Content>
    </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;