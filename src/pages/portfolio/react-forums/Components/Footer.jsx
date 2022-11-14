import { Button, Flex, Spacer, Text, useColorMode } from '@chakra-ui/react';
import { useContext } from 'react';
import { PathContext } from '../App';

/**
 * The bottom area of the pages.
 */
export default () => {
    const { colorMode } = useColorMode();
    const { setPath } = useContext(PathContext);
    return (
        <Flex as='footer' bg={colorMode === 'light' ? 'gray.400' : 'gray.500'} p={2} w='100%'>
            <Spacer />
            <Flex direction='column' align='start'>
                <Button variant='unstyled' onClick={() => setPath('')}>
                    Website
                </Button>
                <Button variant='unstyled' onClick={() => setPath('')}>
                    Home
                </Button>
            </Flex>
            <Spacer />
            <Flex direction='column' align='start'>
                <Button variant='unstyled' onClick={() => setPath('profile')}>
                    Profile
                </Button>
                <Button variant='unstyled' onClick={() => setPath('forums')}>
                    Forums
                </Button>
            </Flex>
            <Spacer />
            <Flex direction='column' align='start'>
                <Text>Created by Alli (SmolAlli) - 2022</Text>
            </Flex>
            <Spacer />
        </Flex>
    );
};
