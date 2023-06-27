"use client";

import { Button, Stack, Text } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";
import ExampleUsage from "./Components/Examples/Index";
import PropsTable from "./Components/Examples/PropsTable";

export default function Buttons() {
  return (
    <>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            Buttons
          </Text>
          <FcLock />
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Stack w={{ base: "50%", md: "50%", lg: "50%" }}>
            <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
              Button component allows user to perform an action or event, such
              as submitting a form, opening a Dialog, canceling an action, or
              performing a delete operation.
            </Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }}>
            {/* <Button variant="outline" colorScheme="green">
            Cookie Preferences
          </Button>
          <Button colorScheme="green">OK</Button> */}
          </Stack>
        </Stack>
      </Stack>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            Usage
          </Text>
        </Stack>
        <ExampleUsage title={"Default Button"} code={""} />
      </Stack>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            Props
          </Text>
        </Stack>
        <PropsTable />
      </Stack>
    </>
  );
}
