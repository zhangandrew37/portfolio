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
      <SectionText>
        Software Developer @ Wind River. Passionate about software engineering
        and machine learning.
      </SectionText>
      <Button onClick={() => (window.location = "../../../public/resume.pdf")}>
        Resume
      </Button>
      {/* an change to "contact me -> email" */}
    </LeftSection>
  </Section>
);

export default Hero;
