import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/use-media-query';
import styled from 'styled-components';

const tabs = [
  {
    title: 'How do UI components improve UX?',
    id: 'improve',
    description:
      'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:
      'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
  },
  {
    title: 'Importance of UI component.',
    id: 'important',
    description:
      'Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.',
    imageUrl:
      'https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format',
  },
  {
    title: 'Is UI and UX Same?',
    id: 'same',
    description:
      'Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.',
    imageUrl:
      'https://images.unsplash.com/photo-1693581176773-a5f2362209e6?q=80&w=1200&auto=format',
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0.5rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const TabContainer = styled.div`
  border-radius: 0.25rem;
  grid-column: span 5;

  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;

const Tab = styled(motion.div)`
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid transparent;

  &.active {
    border: 2px solid ${({ theme }) => theme.primary};
  }

  &.inactive {
    &:hover {
      border-color: #656fe2;
    }
  }
`;

const TabTitle = styled.h3`
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
  color: white; /* Changed to grey */
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.active {
    background-color: transparent; 
  }

  &.inactive {
    background-color: transparent; 
  }
`;

const TabDescription = styled.p`
  background-color: transparent;
  color: grey;
  padding: 0.75rem;
`;

const TabImage = styled.img`
  margin-bottom: 0.5rem;
  max-width: 100%;
  height: auto;
  border-radius: 0.375rem;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none; /* Hide image on mobile view */
  }
`;

const ImageContainer = styled(motion.div)`
  padding: 1rem;
  height: 400px;
  overflow: hidden;
  grid-column: span 7;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
    text-align: center;
    margin-bottom: 40px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? index : index);
  };
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
    
        <Title>
            About Nakshatra
        </Title>
    <Container>
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={activeIndex === index ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
          >
            <TabTitle className={activeIndex === index ? 'active' : 'inactive'}>
              {tab.title}
            </TabTitle>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 0.14,
                  }}
                >
                  <TabDescription>{tab.description}</TabDescription>
                 
                </motion.div>
              )}
            </AnimatePresence>
          </Tab>
        ))}
      </TabContainer>
      <>
        {isDesktop &&
          tabs.map((tab, index) => (
            <AnimatePresence mode="popLayout" key={index}>
              {activeIndex === index && (
                <ImageContainer className="p-4">
                  <motion.img
                    src={tab.imageUrl}
                    alt={tab.title}
                    width={800}
                    height={800}
                    initial={{ opacity: 0, overflow: 'hidden' }}
                    animate={{ opacity: 1, overflow: 'hidden' }}
                    exit={{ opacity: 0, overflow: 'hidden' }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2,
                    }}
                  />
                </ImageContainer>
              )}
            </AnimatePresence>
          ))}
      </>
    </Container>
    </>
  );
}

export default Index;