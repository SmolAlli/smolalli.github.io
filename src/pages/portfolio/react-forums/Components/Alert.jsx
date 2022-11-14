import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    ButtonGroup,
} from '@chakra-ui/react';
import React from 'react';

/**
 * The generic alert dialog, makes it easier to not have to repeat code.
 */
const Alert = ({ heading, body, onClick, isOpen, onClose }) => {
    const cancelRef = React.useRef();
    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered={true}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        {heading}
                    </AlertDialogHeader>

                    <AlertDialogBody>{body}</AlertDialogBody>

                    <AlertDialogFooter>
                        <ButtonGroup gap='2'>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={onClick}>
                                Delete
                            </Button>
                        </ButtonGroup>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

Alert.defaultProps = {
    body: "Are you sure? You can't undo this action afterwards.",
    onClick: () => alert('ERROR: No action on alert dialog given'),
};

export default Alert;
