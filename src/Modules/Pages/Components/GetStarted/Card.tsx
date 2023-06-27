import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";
import { FcLock } from "react-icons/fc";

export default function GetStartedCard() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" bg={"#FFFFFF"}>
      <Stack direction="row" alignItems="center">
        <Text fontWeight="bold" fontSize="2xl">
          What is io-ui Custom Components
        </Text>
        <FcLock />
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
          io Custom Components Package is a comprehensive collection of
          pre-built UI components specifically designed for mobile app
          development using React Native with Expo. This package offers
          developers a convenient and efficient way to quickly build
          high-quality, cross-platform mobile applications with ease. This
          package offers a wide range of ready-to-use components that can be
          seamlessly integrated into React Native projects, saving developers
          valuable time and effort. It like your react native template
        </Text>
      </Stack>
    </Stack>
  );
}
