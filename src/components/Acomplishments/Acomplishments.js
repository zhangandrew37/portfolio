import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 3000, text: "Soccer" },
  { number: 2500, text: "Piano" },
  { number: 300, text: "Calisthenics" },
  { number: 200, text: "Tetris" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Interests: Hours Spent</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
