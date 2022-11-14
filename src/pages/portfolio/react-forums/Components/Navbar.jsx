import { Box, Button, ButtonGroup, Flex, Spacer, Text, Tooltip, useColorMode } from '@chakra-ui/react';
import { useContext } from 'react';
import { PathContext } from '../App';

/**
 * Links on the navbar.
 */
const NavbarLink = ({ children, label, to, onClick, variant }) => {
    const { setPath } = useContext(PathContext);
    return (
        <Tooltip label={label} closeOnMouseDown={false}>
            <Button
                variant={variant ?? 'navbar'}
                className='material-icons'
                onClick={() => {
                    onClick();
                    setPath(to);
                }}
            >
                {children}
            </Button>
        </Tooltip>
    );
};

NavbarLink.defaultProps = {
    onClick: () => {},
};

/**
 * Top navigation area.
 */
export default () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex as='nav' h='5rem' align='center' bg={colorMode === 'light' ? 'cyan.600' : 'cyan.700'} w='100%' p='0 1rem'>
            {/* Branding */}
            <NavbarLink to='' variant='invisible'>
                <Text variant='branding' ml={4}>
                    Website
                </Text>
            </NavbarLink>

            <Spacer />

            <Box className='nav-menu'>
                <ButtonGroup gap={2} pr='1rem'>
                    <NavbarLink to='profile' label='View Profile'>
                        manage_accounts
                    </NavbarLink>

                    <NavbarLink to='forums' label='Forums'>
                        forum
                    </NavbarLink>
                    <NavbarLink
                        onClick={toggleColorMode}
                        label={colorMode === 'light' ? 'Toggle to Dark mode' : 'Toggle to Light mode'}
                    >
                        {colorMode === 'light' ? 'dark_mode' : 'light_mode'}
                    </NavbarLink>
                </ButtonGroup>
            </Box>
        </Flex>
    );
};
