import React, { ReactNode, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { FiHome, FiMenu } from "react-icons/fi";
import { RxButton } from "react-icons/rx";
import { HiSelector } from "react-icons/hi";
import { BsGithub, BsInputCursorText } from "react-icons/bs";
import { DiNpm } from "react-icons/di";
import { IconType } from "react-icons";
import { BiSpreadsheet } from "react-icons/bi";
import { AiOutlineIdcard } from "react-icons/ai";
import { LuPanelTopOpen } from "react-icons/lu";
import { useMyContext } from "../Context/Provider";
import Link from "next/link";

interface LinkItemProps {
  name: string;
  icon: IconType;
  link: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Getting Started", icon: FiHome, link: "#" },
];

const LinkItems2: Array<LinkItemProps> = [
  { name: "Buttons", icon: RxButton, link: "buttons" },
  { name: "Selectors", icon: HiSelector, link: "selectors" },
  { name: "BottomSheet", icon: BiSpreadsheet, link: "bottomsheet" },
  { name: "Input", icon: BsInputCursorText, link: "input" },
  { name: "Card", icon: AiOutlineIdcard, link: "card" },
  { name: "Modal", icon: LuPanelTopOpen, link: "modal" },
];

export default function SiderBar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          io-elements
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link?.link}>
          {link.name}
        </NavItem>
      ))}
      <Text
        mb={"4"}
        mx="7"
        fontSize="1rem"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Components
      </Text>
      {LinkItems2.map((link) => (
        <NavItem2
          key={link.name}
          name={link.name}
          icon={link.icon}
          link={link?.link}
        >
          {link.name}
        </NavItem2>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: any;
  link: string;
  name?: string;
}
const NavItem = ({ icon, link, children, ...rest }: NavItemProps) => {
  const { setSelected } = useMyContext();
  return (
    <Link
      href={`/${link}`}
      onClick={() => setSelected?.("getstarted")}
      style={{ textDecoration: "none" }}
      // _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const NavItem2 = ({ icon, link, children, name, ...rest }: NavItemProps) => {
  const { setSelected } = useMyContext();
  return (
    <Link
      href={`/${link}`}
      onClick={() => setSelected?.(name)}
      style={{ textDecoration: "none" }}
      // _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        py="2"
        px="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  selected?: string;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { selectedLink } = useMyContext();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "space-between" }}
      {...rest}
    >
      <Text
        display={{ base: "none", md: "flex" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {selectedLink !== "getstarted" ? selectedLink : "Getting Started"}
      </Text>

      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        io-elements
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Link href="https://github.com/imoempire/IO-UI" target="_blank">
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<BsGithub size={30} />}
          />
        </Link>

        <Link href="https://www.npmjs.com/package/io-elements" target="_blank">
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<DiNpm size={30} />}
          />
        </Link>
      </HStack>
    </Flex>
  );
};
