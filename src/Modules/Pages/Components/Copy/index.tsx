import { ArrowForwardIcon, CopyIcon } from "@chakra-ui/icons";
import { Box, Button, Card, Code, Stack, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

interface Props {
  title: string;
  code: string;
}

export default function CopyCode({ title, code }: Props) {
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
      border={"1px"}
      direction={{ base: "column", md: "row" }}
      justify={"space-between"}
      p="4"
      boxShadow="lg"
      m="4"
      borderRadius="md"
    >
      <Stack direction="row" alignItems="center">
        <Code bg={"white"}>{code}</Code>
      </Stack>

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Button
          size="xs"
          rightIcon={<CopyIcon />}
          colorScheme="teal"
          variant="outline"
          onClick={() => handleCopy(code)}
        >
          copy
        </Button>
      </Stack>
    </Stack>
  );
}

// <Box m="4">
//   <Text my="1">{title}</Text>
//   <Card w={"50%"}>
//     <Stack direction="row" m="2" align={"center"} justify={"space-between"}>
//       <Box>
//         <Code bg={"white"}>{code}</Code>
//       </Box>
//       <Box>
//         <Button
//           size="xs"
//           rightIcon={<CopyIcon />}
//           colorScheme="teal"
//           variant="outline"
//           onClick={() => handleCopy(code)}
//         >
//           copy
//         </Button>
//       </Box>
//     </Stack>
//   </Card>
// </Box>
