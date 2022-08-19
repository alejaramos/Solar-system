import { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Input,
  Stack,
  Button,
  Box,
  Icon,
  InputGroup,
  InputRightAddon,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import css from "../styles/Home.module.css";

export default function NavbarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();

  return (
    <Box paddingLeft={"2%"} paddingTop={"3%"} id="SOY ESTEEE">
      <IconButton
        icon={<HamburgerIcon paddingLeft={"2%"} paddingTop={"3%"} />}
        onClick={onOpen}
        bg="black"
        color="#9f231a"
        w="10%"
        fontSize="40px"
      />

      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        initialFocusRef={firstField}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box display="flex" alignItems="left">
            <DrawerHeader fontWeight="900" color="whitesmoke" fontSize="30px">
              My portfolio
            </DrawerHeader>
            <DrawerCloseButton border={"none"} bg="none" color="white" />
          </Box>
          <DrawerBody className={css.backgroundNavbarMobile}>
            <Stack spacing={8}>
              
              <a href="#Projects">
                Projects
                <ChevronDownIcon />
              </a>
              <a href="#Contact">
                Contact
                <ChevronDownIcon />
              </a>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
