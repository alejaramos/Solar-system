import { ReactNode } from "react";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  HStack,
  Link,
  useMediaQuery,
  useColorModeValue,
  Stack,
  Center,
  Text,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import css from "../styles/Home.module.css";
import NavbarMobile from "../Components/NavbarMobile";

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
  const [isMobile] = useMediaQuery("(max-width: 775px)");
  return (
    <Box className={css.navbar} w="100%" h="80px">
      {isMobile ? (
        <NavbarMobile />
      ) : (
        <Grid templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={2} h="10">
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
          <GridItem colStart={4} colEnd={6} h="10">
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
      )}
    </Box>
  );
}
