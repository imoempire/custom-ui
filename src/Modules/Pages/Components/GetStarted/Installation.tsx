import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import CopyCode from "../Copy";
import { nameList } from "@/src/Constants";

export default function InstallationMessage() {
  return (
    <Box p="4">
      <Text fontSize="md" fontWeight={"semibold"}>
        To use io-elements Components Package, Make sure you have:
      </Text>
      <UnorderedList>
        {/* <ListItem>Expo</ListItem> */}
        <ListItem>React Native</ListItem>
      </UnorderedList>
      <Text mt={"5"} fontSize="md" fontWeight={"semibold"}>
        To install io-elements in your project, run one of the following
        commands in your terminal:
      </Text>
      <Box mt={"2"} w="50%">
        <Text mt={"2"} fontSize="md" fontWeight={"semibold"}>
          Using NPM
        </Text>
        <Box>
          <CopyCode title="Using NPM" code={nameList.npm} />
        </Box>
        <Text mt={"2"} fontSize="md" fontWeight={"semibold"}>
          Using Yarn
        </Text>
        <Box>
          <CopyCode title="Using yarn" code={nameList.yarn} />
        </Box>
      </Box>
    </Box>
  );
}
