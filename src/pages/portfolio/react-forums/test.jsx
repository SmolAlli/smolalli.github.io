import { ChakraProvider } from '@chakra-ui/react';
import { FrontPage } from './Components';

export default () => {
    return (
        <ChakraProvider>
            <FrontPage />
        </ChakraProvider>
    );
};
