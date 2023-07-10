import { nameList } from "@/src/Constants";
import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export default function Dependencies() {
  return (
    <Box p="4">
      <Text fontSize="md" fontWeight={"semibold"}>
        List of dependencies used in {nameList.name} components:
      </Text>
      <UnorderedList>
        <ListItem>React Native</ListItem>
        <ListItem>react-native-vector-icons</ListItem>
        {/* <ListItem>Integer molestie lorem at massa</ListItem> */}
        {/* <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
      </UnorderedList>
    </Box>
  );
}
