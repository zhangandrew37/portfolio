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
            HTML, CSS, JS and <br />
            React.js
          </listParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <listParagraph>
            Experience with <br />
            SQL, Firebase and <br />
            Databases
          </listParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Full Stack</ListTitle>
          <listParagraph>
            Experience with <br />
            Java, Python, C# and <br /> .NET
          </listParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
