"use client";

import { Button, Stack, Text } from "@chakra-ui/react";
import { RxButton } from "react-icons/rx";
import ExampleUsage from "../Pages/Components/Examples/Index";
import PropsTable from "../Pages/Components/Examples/PropsTable";
import { ButtonProps } from "@/utils/PropsData";

interface PropObj {
  name: string;
  required: string;
  type: string;
  default: string;
}

interface Props {
  name: string;
  descrption: string;
  useageLink: string;
  componentProps: PropObj[];
}

export default function ComponentPageLayout({
  name,
  descrption,
  useageLink = "",
  componentProps = [],
}: Props) {
  return (
    
    <>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            {name}
          </Text>
          <RxButton size={40} />
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Stack w={{ base: "50%", md: "50%", lg: "50%" }}>
            <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
              {descrption}
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            Usage
          </Text>
        </Stack>
        <ExampleUsage src={useageLink} title={`Default ${name}`} code={""} />
      </Stack>
      <Stack bg={"#FFFFFF"} p="4" boxShadow="lg" m="4" borderRadius="sm">
        <Stack direction="row" alignItems="center">
          <Text fontSize={"4xl"} fontWeight="semibold">
            Props
          </Text>
        </Stack>
        <PropsTable data={componentProps} caption={`${name} Props`} />
      </Stack>
    </>
  );
}
