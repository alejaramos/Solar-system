import { useMediaQuery, Heading, Box, Text } from "@chakra-ui/react";
import css from "../styles/Home.module.css";

export default function Contact() {
  const [isMobile] = useMediaQuery("(max-width: 775px)");

  return (
    <Box className={css.Contact} marginTop={"0px"}>
      <h1 className={isMobile ? css.responsiveTitleContact : css.titleContact}>
        Do you want me to be part of your crew?
      </h1>
      {/* <Text color="white" marginTop={"0px"}>
      
      </Text> */}
    </Box>
  );
}
