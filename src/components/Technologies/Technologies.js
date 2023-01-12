import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm proficient in many languages, frameworks and libraries!
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <listParagraph>
            Experience with <br />
            JavaScript, TS, <br />
            HTML/CSS and React.js
          </listParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <listParagraph>
            Experience with <br />
            Java, Python, and<br />
            Database Infastructure
          </listParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>System software</ListTitle>
          <listParagraph>
            Experience with <br />
            C, C++, O/S, concurrent
            <br />
            and multithreaded applications
            <br />
          </listParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
