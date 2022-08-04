import { useMediaQuery, Heading, Box, Text, Img, Link } from "@chakra-ui/react";
import css from "../styles/Home.module.css";

export default function Contact() {
  const [isMobile] = useMediaQuery("(max-width: 775px)");

  return (
    <Box className={css.Contact} marginTop={"0px"}>
      <Heading className={isMobile ? css.responsiveTitleContact : css.titleContact}>
        Do you want me to be part of your crew?
      </Heading>
   
        <Link href='https://github.com/alejaramos' isExternal>
        <Img src="/github.png" boxSize='100px' alt="git icon"></Img>
        </Link>
      
    </Box>
  );
}
