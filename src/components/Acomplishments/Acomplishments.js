import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 10, text: "Tetris" },
  { number: 1000, text: "Soccer" },
  { number: 1900, text: "Piano" },
  { number: 5000, text: "Calisthenics" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Interests and Achivements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
