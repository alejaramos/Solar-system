import { useMediaQuery, Heading, Box, Text, Img, Link, Spacer} from "@chakra-ui/react";
import css from "../styles/Home.module.css";

export default function Contact() {
  const [isMobile] = useMediaQuery("(max-width: 775px)");

  return (
    <Box id="Contact" className={css.Contact} marginTop={"0px"}>
      <Heading className={isMobile ? css.responsiveTitleContact : css.titleContact}>
        Do you want me to be part of your crew?
      </Heading>
<Box paddingTop={"2%"}>
      <Box  className={css.contactMethods}>
        Toronto, ON
        <Spacer />
        Canada
      </Box>
      <Box className={css.contactMethods}>
      <a href="mailto:iaramosr98@gmail.com">iaramosr98@gmail.com</a>  
      </Box>
   
      <Box className={css.contactMethods}>
        +1 437 833 6991
      </Box>
      </Box>
   
   
        <Link href='https://github.com/alejaramos' isExternal>
        <Img src="/github.png" boxSize='100px' alt="git icon"></Img>
        </Link>
      
    </Box>
  );
}
