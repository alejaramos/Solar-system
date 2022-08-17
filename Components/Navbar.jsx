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
      bg: useColorModeValue("#D8CBC7", "white"),
    }}
    href={`#${children}`}
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <Box className={css.navbar} w="100%" h="80px">
      <Grid
      
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem colSpan={2} h="10" >
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            h="80px"
            color="white"
          >
            <Text className={css.titleNavbar} fontSize="250%">
              My portfolio
            </Text>
          </Box>
        </GridItem>
        <GridItem colStart={4} colEnd={6} h="10" >
          <Box
            fontSize="4xl"
            display={"flex"}
            h="80px"
            paddingTop="30px"
            justifyContent="center"
          >
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
        </GridItem>
      </Grid>
    </Box>
  );
}
