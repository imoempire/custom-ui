import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";

export default function Dependencies() {
  return (
    <Box p="4">
      <Text fontSize="md" fontWeight={"semibold"}>
        List of dependencies used in io-ui components:
      </Text>
      <UnorderedList>
        <ListItem>Expo</ListItem>
        <ListItem>React Native</ListItem>
        {/* <ListItem>Integer molestie lorem at massa</ListItem> */}
        {/* <ListItem>Facilisis in pretium nisl aliquet</ListItem> */}
      </UnorderedList>
    </Box>
  );
}
