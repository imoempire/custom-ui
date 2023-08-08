"use client";

import { Button, Stack, Text } from "@chakra-ui/react";
import { RxButton } from "react-icons/rx";
import ExampleUsage from "./Components/Examples/Index";
import PropsTable from "./Components/Examples/PropsTable";
import { ButtonProps } from "@/utils/PropsData";
import { BiSpreadsheet } from "react-icons/bi";

export default function BottomSheet() {
  return (
    <>
      <Text fontSize={"4xl"} fontWeight="semibold">
        Coming Soon
      </Text>
      <>
        {/* <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text fontSize={"4xl"} fontWeight="semibold">
              BottomSheet
            </Text>
            <BiSpreadsheet size={40} />
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
            <Stack direction={{ base: "column", md: "row" }}></Stack>
          </Stack>
        </Stack> */}

        {/* <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text fontSize={"4xl"} fontWeight="semibold">
              Usage
            </Text>
          </Stack>
          <ExampleUsage
            src="https://snack.expo.dev/@imoempire/io-elements-button"
            title={"Default Button"}
            code={""}
          />
        </Stack> */}

        {/* <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
          <Stack direction="row" alignItems="center">
            <Text fontSize={"4xl"} fontWeight="semibold">
              Props
            </Text>
          </Stack>
          <PropsTable data={ButtonProps} caption={"Button Selector"} />
        </Stack> */}
      </>
    </>
  );
}
