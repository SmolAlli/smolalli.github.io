import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

import { PathContext } from '../App';
import { useContext } from 'react';

/**
 * Starting area for the app.
 */
export default () => {
    const { setPath } = useContext(PathContext);
    return (
        <Flex direction='column' w='50%' wrap='wrap' justify='space-evenly' align='center' h='full' flex={1}>
            <Box w='full'>
                <Heading size='lg' mb={4}>
                    Website
                </Heading>

                <Text>
                    Welcome to Website! This is a social media-esque website, with profiles and forums.
                    <br style={{ marginBottom: '0.2rem' }} />
                    <Button
                        variant='link'
                        onClick={() => {
                            setPath('profile');
                        }}
                    >
                        View a profile
                    </Button>{' '}
                    or{' '}
                    <Button
                        variant='link'
                        onClick={() => {
                            setPath('forums');
                        }}
                    >
                        go to the forums
                    </Button>{' '}
                    to start using the website.
                </Text>
            </Box>
            <Box w='full'>
                <Heading size='md' m='2rem 0'>
                    What is this website?
                </Heading>
                <Text w='90%'>
                    This is a website created from a project I did for a full-stack development course for university.
                    It was done with just me, using React, Chakra UI, and routing (which has been removed, due to Astro
                    being weird).
                </Text>
            </Box>
        </Flex>
    );
};
