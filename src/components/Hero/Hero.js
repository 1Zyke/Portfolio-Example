import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a FullStack web developer from Dominican Republic, currently living in Santo Domingo, looking for new opportunities, more experience and knowledge.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/1Zyke'}>View More</Button>
    </LeftSection>
  </Section>
);

export default Hero;