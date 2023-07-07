import { ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Card, Code, Stack, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import CodeCard from "./Card";

interface Props {
  title: string;
  code: string;
  src?: string;
}

export default function ExampleUsage({ title, code, src }: Props) {
  // COPY CODE
  const textareaRef = useRef(null);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      console.log("Text copied to clipboard:", code);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <Stack
      direction={{ base: "column", md: "column" }}
      justifyContent="space-between"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        w={{ base: "100%", md: "100%" }}
      >
        <Text
          fontWeight={{ base: "500" }}
          fontSize={{ base: "md" }}
          textAlign={"left"}
          maxW={"4xl"}
        >
          {title}
        </Text>
       
      </Stack>
      <Stack direction={{ base: "column", md: "row" }}>
        <CodeCard source={src} />
      </Stack>
    </Stack>
  );
}
