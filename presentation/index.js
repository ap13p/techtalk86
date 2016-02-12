// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,BlockQuote,Cite,CodePane,Deck,Fill,Heading,Image,Layout,Link,ListItem,
  List,Markdown,Quote,Slide,Spectacle,Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

const codes = {
    arrow: require('../assets/code/01_arrow.md'),
    classes: require('../assets/code/02_classes.md'),
    template_string: require('../assets/code/03_template_string.md'),
    object_literals: require('../assets/code/04_object_literals.md'),
    destructing: require('../assets/code/05_destructing.md'),
    default_rest_spread: require('../assets/code/06_default_rest_spread.md'),
    let_const: require('../assets/code/07_let_const.md'),
    unicode: require('../assets/code/08_unicode.md'),
    modules_1: require('../assets/code/09_modules_1.md'),
    modules_2: require('../assets/code/09_modules_2.md'),
    module_loaders: require('../assets/code/10_module_loaders.md'),
    map_set_weak: require('../assets/code/11_map_set_weak.md'),
    symbols: require('../assets/code/12_symbols.md'),
    subclasses: require('../assets/code/13_subclasses.md'),
    promises: require('../assets/code/14_promises.md'),
    math_number_string_array_object_apis: require('../assets/code/15_math_number_string_array_object_apis.md'),
    binary_octal_literals: require('../assets/code/16_binary_octal_literals.md')
}

preloader(images);

const theme = createTheme({
  primary: "#2A98DA"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ECMAScript 6
            </Heading>

            <Text textSize="1.5em" margin="20px 0px 0px" bold>
                By Example
            </Text>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>
                Presented by Afief S
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={1} caps lineHeight={1} textColor="primary">
                Features
            </Heading>
            <Layout>
                <Fill>
                    <List textColor="primary">
                        <ListItem>Arrow</ListItem>
                        <ListItem>Classes</ListItem>
                        <ListItem>Template String</ListItem>
                        <ListItem>Destructing</ListItem>
                        <ListItem>default + rest + spread</ListItem>
                        <ListItem>let + const</ListItem>
                        <ListItem>Unicode</ListItem>
                        <ListItem>Modules</ListItem>
                        <ListItem>Module Loaders</ListItem>
                    </List>
                </Fill>
                <Fill>
                    <List textColor="primary">
                        <ListItem>Map + Set + Weak</ListItem>
                        <ListItem>Symbols</ListItem>
                        <ListItem>Subclasses built-ins</ListItem>
                        <ListItem>Promises</ListItem>
                        <ListItem>Math + Number + String + Array + Object APIs</ListItem>
                        <ListItem>Binary + Octal literals</ListItem>
                    </List>
                </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} lineHeight={1} textColor="primary">Arrow</Heading>
            <Markdown source={codes.arrow} />
          </Slide>
          <Slide transition={["slide"]} bgColor="black" bgDarken={0.75}>
            <Heading size={1} lineHeight={1} textColor="primary">Classes</Heading>
            <Markdown source={codes.classes} />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
              <Heading size={1} lineHeight={1} textColor="primary">Template String</Heading>
              <Markdown source={codes.template_string} />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Enhanced Object Literals</Heading>
            <Markdown source={codes.object_literals} />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Destructing</Heading>
            <Markdown source={codes.destructing} />
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Default + Rest + Spread</Heading>
            <Markdown source={codes.default_rest_spread} />
          </Slide>
          <Slide transition={["fade"]} bgColor="black" textColor="primary">
            <Heading size={1} lineHeight={1} textColor="primary">let + const</Heading>
            <Markdown source={codes.let_const} />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Unicode</Heading>
            <Markdown source={codes.unicode} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Modules</Heading>
            <Markdown source={codes.modules_1} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Modules++</Heading>
            <Markdown source={codes.modules_2} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Module Loaders</Heading>
            <Markdown source={codes.module_loaders} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Map + Set + Weak</Heading>
            <Markdown source={codes.map_set_weak} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Symbols</Heading>
            <Markdown source={codes.symbols} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Promises</Heading>
            <Markdown source={codes.promises} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">New APIs</Heading>
            <Markdown source={codes.math_number_string_array_object_apis} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Binary + Octal Literals</Heading>
            <Markdown source={codes.binary_octal_literals} />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} lineHeight={1} textColor="primary">Terima Kasih</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
