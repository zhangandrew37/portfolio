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
        Backend @ <a href="https://www.binance.com/en">Binance</a>. Check out
        some cool things I built below!
      </SectionText>
      <Button onClick={() => (window.location = "../../../public/resume.pdf")}>
        Resume
      </Button>
      {/* an change to "contact me -> email" */}
    </LeftSection>
  </Section>
);

export default Hero;
