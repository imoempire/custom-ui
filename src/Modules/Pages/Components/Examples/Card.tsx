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

export default function CodeCard() {
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
            src="https://snack.expo.dev/@imoempire/io-ui-buttons"
            style={{ width: "100%", height: "100%", border: "0" }}
            sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        {/* <Flex flex={1}>
        </Flex> */}
        {/* <Stack
          flex={1}
          flexDirection="column"
          //   justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Stack
            p={1}
            w="100%"
            height={"10%"}
            // bg={"red.200"}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>Hello</div>
            <Button
              size="xs"
              rightIcon={<CopyIcon />}
              colorScheme="teal"
              variant="outline"
            >
              copy
            </Button>
          </Stack>

          <Stack
            bg={"green.400"}
            w={"90%"}
            align={"center"}
            justify={"center"}
            direction={"row"}
            mt={6}
          >
            <Button>Make</Button>
          </Stack>
        </Stack> */}
      </Stack>
    </Center>
  );
}
