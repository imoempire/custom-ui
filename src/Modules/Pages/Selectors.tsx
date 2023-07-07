"use client";

import { Stack, Text } from "@chakra-ui/react";
import ExampleUsage from "./Components/Examples/Index";
import PropsTable from "./Components/Examples/PropsTable";
import { IoMdArrowDropdown } from "react-icons/io";
import { SeletorProps } from "@/utils/PropsData";

export default function AllSelectors() {
  return (
    <>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            DropdownSelector
          </Text>
          <IoMdArrowDropdown size={40} />
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Stack w={{ base: "50%", md: "50%", lg: "50%" }}>
            <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
              DropdownSelector allows user to select from options displayed in a
              dropdown
            </Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }}></Stack>
        </Stack>
      </Stack>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            Usage
          </Text>
        </Stack>
        <ExampleUsage
          src="https://snack.expo.dev/@imoempire/io-elements-selector"
          title={"Default Button"}
          code={""}
        />
      </Stack>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            Props
          </Text>
        </Stack>
        <PropsTable data={SeletorProps} caption={"Dropdown Selector"} />
      </Stack>
    </>
  );
}
