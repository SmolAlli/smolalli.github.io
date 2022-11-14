import { createContext } from 'react';
import { ChakraProvider, extendTheme, theme, ColorModeScript } from '@chakra-ui/react';
import { Navbar, Footer, FrontPage, Profile, Forum } from './Components/index';
import { getUser } from './Data/accounts';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import customTheme from './Theme';

/*
 * Universal exports
 *
 * These are used in multiple files, so they are exported from the app file to not have to repeat them.
 */

// Toast duration times. In ms.
const shortToastTime = 2000;
const longToastTime = 5000;

// REGULAR EXPRESSIONS - Match certain phrases to validate user inputs.
const imageRegex = new RegExp('(https?://.*.(?:png|jpg|jpeg))', 'i'); // Regex - https://website.com/image.jpg
const emailRegex = new RegExp("^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"); // Regex - (email)@(website).(TLD)
const passwordRegex = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$'); // Regex - 8+ chars long, 1 lowercase letter, 1 uppercase letter, one digit, and one special character

// Make sure that everywhere has access to the currently logged in user.
const UserContext = createContext();
const PathContext = createContext();

/**
 * Main app.
 */
export default () => {
    const [path, setPath] = useState('');
    return (
        <>
            {/* The project uses Chakra for its design. The colour mode script is for light/dark mode */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={extendTheme(customTheme)}>
                <Flex direction='column' className='app' minH='100vh' align='center'>
                    <UserContext.Provider value={getUser()}>
                        <PathContext.Provider value={{ path, setPath }}>
                            <Navbar change={setPath} />
                            <Flex
                                direction='column'
                                align='center'
                                justify='center'
                                as='main'
                                position='relative'
                                w='75vw'
                                sx={{ wordWrap: 'break-word' }}
                                h='full'
                                grow='1'
                            >
                                {(() => {
                                    // Custom routing
                                    // There are only 3 paths so not much there
                                    switch (path) {
                                        case 'forums':
                                            return <Forum />;
                                        case 'profile':
                                            return <Profile />;
                                        default:
                                            return <FrontPage />;
                                    }
                                })()}
                            </Flex>
                            <Footer />
                        </PathContext.Provider>
                    </UserContext.Provider>
                </Flex>
            </ChakraProvider>
        </>
    );
};

export { UserContext, PathContext, shortToastTime, longToastTime, emailRegex, imageRegex, passwordRegex };
