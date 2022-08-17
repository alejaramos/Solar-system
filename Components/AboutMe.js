import {
  useMediaQuery,
  Heading,
  Box,
  Text,
  Img,
  Link,
  Flex,
  Spacer,
  Grid,
} from "@chakra-ui/react";
import css from "../styles/Home.module.css";

export default function AboutMe() {
  const [isMobile] = useMediaQuery("(max-width: 775px)");

  return (
    <Box id="AboutMe" className={css.AboutMe} bgColor="black">
      <Img className={css.whiteImage} src="white.jpg" h="70%" w="90.5%"></Img>
      <Box className={css.itemC} w="45%">
        <Text>
          Hi! My name is Ingrid Ramos and After leaving my planet φιλοσοφία, I
          dedicated myself to capturing ships across the galaxy. To do this a
          month ago I completed an Engineering Immersion program at Plataforma5
          for 800 hours in three months (What a crazy thing, isn't it?). It
          amazes me how much I have learned from a decision that I undertook 9
          months ago, it has been a life changing experience. In the training I
          learned how to manage my crew and time (based on daily goals) and
          above all I found a new passion.
          <Spacer />
          So now I think first on taking every risk and dropping every fear; the
          constant learning and understanding of what happens behind constant
          learning and understanding of what happens inside every ship, makes
          traveling the galaxy creating and capturing new ships a beautiful
          adventure.
          <Spacer />
          When I'm not creating ships and searching for space pirates you can
          probably find me reading books, learning new things, tasting beer or
          listening to new new things, tasting beer or listening to diferents
          music genres.
        </Text>
      </Box>
    </Box>
  );
}
