"use client";

import { Box, Card, CardBody, Stack, Text } from "@chakra-ui/react";
import GetStartedCard from "./Components/GetStarted/Card";
import { FcLock } from "react-icons/fc";
import InstallationMessage from "./Components/GetStarted/Installation";
import Dependencies from "./Components/GetStarted/Dependencies";

export default function GettingStarted() {
  return (
    <Box>
      <Box>
        <Stack px="4" direction="row" alignItems="center">
          <Text fontWeight="bold" fontSize="2xl">
            Getting Started
          </Text>
        </Stack>
        <GetStartedCard />
      </Box>
      <Box mt="10">
        <Stack px="4" direction="row" alignItems="center">
          <Text fontWeight="bold" fontSize="2xl">
            Installation Guide
          </Text>
        </Stack>
        <Card m="4">
          <InstallationMessage />
        </Card>
      </Box>
      <Box mt="10">
        <Stack px="4" direction="row" alignItems="center">
          <Text fontWeight="bold" fontSize="2xl">
            Dependencies
          </Text>
        </Stack>
        <Card m="4">
          <Dependencies />
        </Card>
      </Box>
    </Box>
  );
}
