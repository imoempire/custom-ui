/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import { CopyIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  source?: string | undefined;
}

export default function CodeCard({ source }: Props) {
  return (
    <Center py={6} w={"100%"}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "100%" }}
        height={{ sm: "476px", md: "40rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
        h={500}
      >
        <iframe
          src={source}
          style={{ width: "100%", height: "100%", border: "0" }}
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Stack>
    </Center>
  );
}
