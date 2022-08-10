import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import css from "../styles/Home.module.css";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["About me", "Projects", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={3}
    py={5}
    color="white"
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray", "white"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {

  return (
    <>
      <Box className={css.navbar} w="100%" h="80px">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          justifyContent="center"
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            h="80px"
            colSpan={1}
            color="white"
          >
            <Text  className={css.titleNavbar} as="i" fontSize="150%">
              My portfolio
            </Text>
          </Box>
          <Box></Box>
          <Box></Box>
          <Box fontSize="4xl" display={"flex"} h="80px" colSpan={5}>
            <HStack spacing={12} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={50}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
