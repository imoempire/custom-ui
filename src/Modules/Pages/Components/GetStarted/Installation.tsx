import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import CopyCode from "../Copy";

export default function InstallationMessage() {
  return (
    <Box p="4">
      <Text fontSize="md" fontWeight={"semibold"}>
        To use io-ui Custom Components Package, Make sure you have:
      </Text>
      <UnorderedList>
        <ListItem>Expo</ListItem>
        <ListItem>React Native</ListItem>
      </UnorderedList>
      <Text mt={"5"} fontSize="md" fontWeight={"semibold"}>
        To install io-ui in your project, run one of the following commands in your
        terminal:
      </Text>
      <Box mt={"2"}>
        <Text mt={"2"} fontSize="md" fontWeight={"semibold"}>
          Using NPM
        </Text>
        <CopyCode title="Using NPM" code="npm i custompacks" />
        <Text mt={"2"} fontSize="md" fontWeight={"semibold"}>
          Using Yarn
        </Text>
        <CopyCode title="Using yarn" code="yarn add custompacks" />
      </Box>
    </Box>
  );
}
