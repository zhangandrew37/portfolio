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
      <SectionText>I love inting!</SectionText>
      <Button
        onClick={() =>
          (window.location = "https://na.op.gg/summoner/userName=sen1orch1cken")
        }
      >
        Learn More
      </Button>
      {/* an change to "contact me -> email" */}
    </LeftSection>
  </Section>
);

export default Hero;
