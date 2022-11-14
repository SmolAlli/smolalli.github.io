import { useContext } from 'react';
import { getDetails } from '../Data/account-details';
import { Box, Flex, Heading, Text, Spacer, Avatar } from '@chakra-ui/react';
import { getUserEmail } from '../Data/accounts';
import { UserContext } from '../App';

/**
 * The profile area where users can see and edit their profiles.
 */
const Profile = () => {
    const User = useContext(UserContext);
    const accountDetails = { ...getDetails(User), email: getUserEmail(User) };

    return (
        <>
            <Flex direction='row' wrap='wrap' justify='space-around' align='center' w='full' h='full'>
                <Spacer />
                <Flex textAlign='left' justify='center'>
                    <Avatar name={accountDetails.name} src={accountDetails.avatar} w={60} h={60} size='2xl' />
                </Flex>
                <Spacer />

                <Box textAlign='left'>
                    <Heading>My Profile</Heading>
                    <Text>
                        {accountDetails.name} (Username: {accountDetails.username})
                        <br />
                        Email: {accountDetails.email}
                        <br />
                        Account created: {new Date(accountDetails.time).toLocaleString()}
                    </Text>
                    <br />
                </Box>
                <Spacer />
            </Flex>
        </>
    );
};

export default Profile;
