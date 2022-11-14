import {
    getAllPosts,
    createPost,
    editPost,
    removePost,
    addUpdoot,
    removeUpdoot,
    addComment,
    editComment,
    removeComment,
    addReply,
    editReply,
    removeReply,
} from '../Data/posts';
import { getDetails } from '../Data/account-details';
import React, { createContext, useContext, useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    useToast,
    Textarea,
    Box,
    Heading,
    Flex,
    Divider,
    Avatar,
    Spacer,
    Text,
    Image,
    ButtonGroup,
    useDisclosure,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { UserContext, shortToastTime, longToastTime, imageRegex } from '../App';
import Alert from './Alert';

// Note: needs to look like a thread, most likely need to add some lines to it to make it look good:tm:

const PostContext = createContext();

/**
 * Form to create a new post from user input.
 */
const NewPostForm = () => {
    const User = useContext(UserContext);
    const { setPosts } = useContext(PostContext);
    const blankPost = {
        username: User,
        main: '',
        timestamp: '',
        comments: [],
        updoots: [],
        image: '',
    };
    const [newPost, setNewPost] = useState(blankPost);
    const toast = useToast();
    const [isValidLink, setValidLink] = useState(null);

    // Changes the values passed through whenever there is a change
    // to be used in the passed handleSubmit function
    const handleChange = (e) => {
        const tmp = { ...newPost };
        tmp[e.target.name] = e.target.value;

        if (e.target.name === 'image') {
            setValidLink(e.target.value !== '' && imageRegex.test(e.target.value));
        }

        setNewPost(tmp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidLink === false) {
            toast({
                title: 'Image URL not valid.',
                status: 'error',
                duration: shortToastTime,
                isClosable: true,
            });
            return;
        }

        const tmp = { ...newPost };

        // Makes the timestamp into the current time
        tmp['timestamp'] = new Date();

        // Makes a new post with the information given
        createPost(tmp);

        // Sets the new post back to blank
        setNewPost(blankPost);

        // Lets the user know their action was successful
        toast({
            title: 'New post created.',
            status: 'success',
            duration: longToastTime,
            isClosable: true,
        });

        // Re-grabs the posts from localStorage
        setPosts(getAllPosts());
    };

    return (
        <Accordion allowToggle w='50%'>
            <AccordionItem>
                <AccordionButton>
                    <Heading textAlign='center' size='md'>
                        New Post
                    </Heading>
                    <Spacer />
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <Flex as='form' align='center' justify='center' direction='column' w='full' onSubmit={handleSubmit}>
                        <FormControl isRequired={true} mb={2} isInvalid={newPost.main.length > 250}>
                            <FormLabel>Body</FormLabel>
                            <Textarea name='main' value={newPost.main} onChange={handleChange} />
                            <FormErrorMessage>The post must be 250 characters at max.</FormErrorMessage>
                        </FormControl>

                        <FormControl mb={2} isInvalid={isValidLink == null ? false : !isValidLink}>
                            <FormLabel>Image</FormLabel>
                            <Input
                                type='url'
                                name='image'
                                placeholder='Add an image'
                                value={newPost.image}
                                onChange={handleChange}
                            />
                            <FormErrorMessage>
                                URL provided does not point to an image, or is not a URL.
                            </FormErrorMessage>
                        </FormControl>

                        <Flex direction='row' w='full' mt={4}>
                            <Button type='submit'>Submit</Button>
                            <Spacer />
                            <Button onClick={() => setNewPost(blankPost)}>Clear</Button>
                        </Flex>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

/**
 * The form for users to add comments to posts.
 */
const CommentForm = ({ id, commentId, type, setIsReplying }) => {
    const User = useContext(UserContext);

    const { setPosts } = useContext(PostContext);
    // Makes an array with the length of posts to hold the comments
    const [newComment, setNewComment] = useState('');

    const handleChange = (e) => {
        // Update comment information
        setNewComment(e.target.value);
    };

    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();

        // If the new comment is empty, don't submit
        if (newComment === '') {
            toast({
                title: `Please enter some text to ${type}.`,
                status: 'error',
                duration: shortToastTime,
                isClosable: true,
            });
            return;
        }

        // If the comment is too long, don't submit
        if (newComment.length > 250) {
            toast({
                title: `Please keep comments to 250 characters or less.`,
                status: 'error',
                duration: shortToastTime,
                isClosable: true,
            });
            return;
        }

        if (type === 'reply') {
            // Adds comment to the array
            addReply(id, commentId, { username: User, comment: newComment });

            // Hides the reply box on submit
            setIsReplying(false);
        } else
            addComment(id, {
                username: User,
                comment: newComment,
                replies: [],
            });

        // Resets comment
        setNewComment('');

        // Re-grabs the posts from localStorage
        setPosts(getAllPosts());
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex as={FormControl} direction='row' align='center' justify='center' isInvalid={newComment.length > 250}>
                <Input type='text' name='comment' placeholder={type} value={newComment} onChange={handleChange} />
                <Button type='submit' ml={4} mw={0}>
                    Submit
                </Button>
            </Flex>
        </form>
    );
};

CommentForm.defaultProps = {
    commentId: null,
    type: 'comment',
};

/**
 * The form for users to edit their comments.
 */
const EditComment = ({ originalComment, isReply, postId, commentId, replyId, setEditing }) => {
    const { setPosts } = useContext(PostContext);

    const [comment, setComment] = useState(originalComment.comment);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // If the edited comment is empty, don't submit
        if (comment === '') {
            toast({
                title: 'Your new comment cannot be empty.',
                status: 'error',
                duration: shortToastTime,
                isClosable: true,
            });
            return;
        }

        // Edits comment/reply in localStorage
        isReply
            ? editReply(postId, commentId, replyId, { username: originalComment.username, comment: comment })
            : editComment(postId, commentId, {
                  username: originalComment.username,
                  comment: comment,
                  replies: originalComment.replies,
              });

        // Resets comment
        setComment('');

        // Re-grabs the posts from localStorage
        setPosts(getAllPosts());

        setEditing(false);
    };

    return (
        <>
            <Alert
                heading='Delete Comment?'
                onClick={() => {
                    isReply ? removeReply(postId, commentId, replyId) : removeComment(postId, commentId);
                    setEditing(false);
                    setPosts(getAllPosts());
                    onClose();
                }}
                isOpen={isOpen}
                onClose={onClose}
            />
            <Box as='form' onSubmit={handleSubmit} ml={4} mt={2}>
                <FormControl isRequired={true} mb={2}>
                    <Textarea value={comment} placeholder='Comment' onChange={handleChange} />
                </FormControl>

                <ButtonGroup gap={2}>
                    {comment === originalComment.comment ? (
                        <Button onClick={() => setEditing(false)}>Cancel</Button>
                    ) : (
                        <Button type='submit'>Submit</Button>
                    )}
                    <Button colorScheme='red' onClick={onOpen}>
                        Delete
                    </Button>
                </ButtonGroup>
            </Box>
        </>
    );
};

/**
 * Generates the comments on a post, and the replies on a post. Also handles editing state.
 */
const Comment = ({ comment, isReply, postId, commentId, replyId }) => {
    const User = useContext(UserContext);
    let commenter = getDetails(comment.username);
    const [isEditing, setEditing] = useState(false);
    const [isReplying, setIsReplying] = useState(false);

    return (
        <Flex direction='row' align='start' p={4} borderLeft={isReply && '1px solid grey'} ml={isReply ? 6 : null}>
            <Flex direction='column'>
                <Avatar name={commenter.name} src={commenter.avatar} />
                {comment.username === User && (
                    <Button
                        size='sm'
                        onClick={() => {
                            setEditing(true);
                        }}
                        mt={2}
                    >
                        Edit
                    </Button>
                )}
                {!isReply && (
                    <Button size='sm' className='material-icons' onClick={() => setIsReplying(true)} mt={2}>
                        reply
                    </Button>
                )}
            </Flex>
            <Flex direction='column' justify='center' w='full'>
                <Text fontSize='l' fontWeight='bold' className='name' ml={4}>
                    {commenter.name}
                </Text>
                <Spacer />
                {isEditing ? (
                    <EditComment
                        originalComment={comment}
                        isReply={isReply}
                        postId={postId}
                        commentId={commentId}
                        replyId={replyId}
                        setEditing={setEditing}
                    />
                ) : (
                    <>
                        <Text ml={4}>{comment.comment || comment.reply}</Text>
                    </>
                )}
                {isReplying && (
                    <Flex justify='end' w='full'>
                        <CommentForm id={postId} commentId={commentId} setIsReplying={setIsReplying} type='reply' />
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};

Comment.defaultProps = {
    isReply: false,
    replyId: null,
};

/**
 * Handles the updoots on each post.
 */
const Updoot = ({ id }) => {
    const { posts, setPosts } = useContext(PostContext);
    const User = useContext(UserContext);

    const checkIfUpdooted = (updoots) => {
        // If the current user is in the list of users that have updooted the post, return true
        for (const updoot of updoots) {
            if (updoot === User) {
                return true;
            }
        }
        // Else, return false
        return false;
    };

    const [isUpdooted, setIsUpdooted] = useState(checkIfUpdooted(posts[id].updoots));

    const onUpdoot = (id) => {
        isUpdooted ? removeUpdoot(id, User) : addUpdoot(id, User);
        setPosts(getAllPosts());

        setIsUpdooted(!isUpdooted);
    };
    return (
        <Button
            rightIcon={<span className='material-icons'>thumb_up</span>}
            colorScheme={isUpdooted ? 'cyan' : null}
            onClick={() => onUpdoot(id)}
        >
            {Object.keys(posts[id].updoots).length}
        </Button>
    );
};

/**
 * Form for the user to edit their posts.
 */
const EditPost = ({ originalPost, id, setEditing }) => {
    const { setPosts } = useContext(PostContext);
    const toast = useToast();

    const [post, setPost] = useState(originalPost);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isValidLink, setValidLink] = useState(null);

    const handleChange = (e) => {
        let tmp = { ...post };
        tmp[e.target.name] = e.target.value;

        if (e.target.name === 'image') {
            setValidLink(e.target.value !== '' ? imageRegex.test(e.target.value) : null);
        }

        setPost(tmp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidLink === false) {
            toast({
                title: 'Avatar URL not valid.',
                status: 'error',
                duration: shortToastTime,
                isClosable: true,
            });
            return;
        }

        // Makes a new post with the information given
        editPost({ ...post }, id);

        // Lets the user know their action was successful
        toast({
            title: 'The post has been successfully edited.',
            status: 'success',
            duration: longToastTime,
            isClosable: true,
        });

        // Re-grabs the posts from localStorage
        setPosts(getAllPosts());

        // Closes the modal
        setEditing(false);
    };

    return (
        <>
            <Alert
                heading='Delete Post?'
                onClick={() => {
                    removePost(id);
                    setPosts(getAllPosts());
                    onClose();
                }}
                isOpen={isOpen}
                onClose={onClose}
            />
            <Box as='form' onSubmit={handleSubmit} m='2rem 0'>
                <FormControl isRequired={true} mb={2} isInvalid={post.main.length > 250}>
                    <Textarea name='main' value={post.main} placeholder='body' onChange={handleChange} />
                    <FormErrorMessage>The post must be 250 characters at max.</FormErrorMessage>
                </FormControl>

                <FormControl mb={2} isInvalid={isValidLink == null ? false : !isValidLink}>
                    <Input
                        type='url'
                        name='image'
                        value={post.image}
                        placeholder='Add an Image link'
                        onChange={handleChange}
                    />
                </FormControl>

                <ButtonGroup gap={2}>
                    {originalPost === post ? (
                        <Button onClick={() => setEditing(false)}>Cancel</Button>
                    ) : (
                        <Button type='submit'>Submit</Button>
                    )}
                    <Button colorScheme='red' onClick={onOpen}>
                        Delete
                    </Button>
                </ButtonGroup>
            </Box>
        </>
    );
};

/**
 * Generates the posts on the forum, and handles the state for if it's being edited.
 */
const Post = ({ post, id }) => {
    const User = useContext(UserContext);
    let user = getDetails(post.username);
    const [isEditing, setEditing] = useState(false);

    return (
        <>
            <Flex direction='column' w='full' p='2rem 0'>
                <Flex direction='row' align='center' justify='center' w='full'>
                    <Avatar name={user.name} src={user.avatar} size='lg' />
                    <Text fontSize='xl' fontWeight='bold' className='name' ml={4}>
                        {user.name}
                    </Text>
                    <Spacer />
                    <Flex align='end' direction='column'>
                        <Text>{new Date(post.timestamp).toLocaleString()}</Text>
                        {/* Allow for editing if you own the post */}
                        {user.username === User && (
                            <>
                                <Spacer />
                                <ButtonGroup gap='2'>
                                    <Button
                                        size='sm'
                                        onClick={() => {
                                            setEditing(true);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </ButtonGroup>
                            </>
                        )}
                    </Flex>
                </Flex>

                {/* Post contents */}
                {isEditing ? (
                    <EditPost originalPost={post} id={id} setEditing={setEditing} />
                ) : (
                    <Box className='main' mt={8} mb={4} textAlign='left' w='full'>
                        {post.main}
                    </Box>
                )}
                {post.image && <Image src={post.image} alt={user.name} maxH='275px' mb={6}></Image>}

                {/* Updoot button and comment form */}
                <Flex direction='row' align='center' justify='center' w='full'>
                    <Updoot id={id} />
                    <Spacer />
                    <CommentForm id={id} />
                </Flex>

                {/* Comments */}
                <Box>
                    {post.comments.map((comment, commentId) => {
                        return (
                            <Flex key={commentId} direction='column'>
                                <Comment comment={comment} postId={id} commentId={commentId} />
                                <Box pl={4}>
                                    {comment.replies.map((reply, replyId) => {
                                        return (
                                            <React.Fragment key={replyId}>
                                                <Comment
                                                    comment={reply}
                                                    isReply={true}
                                                    postId={id}
                                                    commentId={commentId}
                                                    replyId={replyId}
                                                />
                                            </React.Fragment>
                                        );
                                    })}
                                </Box>
                            </Flex>
                        );
                    })}
                </Box>
            </Flex>
        </>
    );
};

/**
 * Forum component. Handles generic posts state and holds all sub-components.
 */
export default () => {
    // Allows for the displayed posts to be updated easily
    const [posts, setPosts] = useState(getAllPosts());

    return (
        <>
            <Flex w='full' align='center' justify='center' direction='column' p='2rem 0'>
                <PostContext.Provider value={{ posts, setPosts }}>
                    <NewPostForm />
                    <Divider m='40px 0' />
                    <Flex align='center' justify='center' direction='column' w='75%'>
                        <Heading>Posts</Heading>
                        {posts.map((post, id) => {
                            return (
                                <React.Fragment key={id}>
                                    <Post post={post} id={id} />
                                </React.Fragment>
                            );
                        })}
                    </Flex>
                </PostContext.Provider>
            </Flex>
            <Spacer />
        </>
    );
};
