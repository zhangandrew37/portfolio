import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br />
        I'm Andrew!
      </SectionTitle>
      <SectionText>[My value/expertise]</SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
      {/* an change to "contact me -> email" */}
    </LeftSection>
  </Section>
);

export default Hero;
