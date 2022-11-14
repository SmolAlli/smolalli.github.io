const LS_POSTS = 'posts';

/**
 * Gets all of the posts in localStorage and returns them
 * @return {array} An array with all of the posts and their information
 */
const getAllPosts = () => {
    return JSON.parse(localStorage.getItem(LS_POSTS)) ?? [];
};

/**
 * Creates a post in localStorage from the given information
 * @param {object} info - An object with all of the post information
 */
const createPost = (info) => {
    let posts = getAllPosts();
    posts.push(info);

    replacePosts(posts);
};

/**
 * Replaces the post of the given postId with the info given.
 * @param {object} info - The information of the post
 * @param {number} postId - The numerical id of the post
 */
const editPost = (info, postId) => {
    let posts = getAllPosts();
    posts[postId] = info;

    replacePosts(posts);
};

/**
 * Removes the post using the postId given
 * @param {number} postId - The numerical id of the post
 */
const removePost = (postId) => {
    let posts = getAllPosts();

    // Removes the specific index and replace posts
    posts.splice(postId, 1);
    replacePosts(posts);
};

/**
 * Removes all of the posts that have the user as the username given
 * @param {string} username - The username of the poster whose posts will be deleted
 */
const removePostsByUser = (username) => {
    let posts = getAllPosts();
    let newPosts = posts.filter((e) => e.username !== username);

    replacePosts(newPosts);
};

/**
 * Replaces all of the posts that are in localStorage
 * @param {array} posts - An array of all of the posts
 */
const replacePosts = (posts) => {
    localStorage.removeItem(LS_POSTS);
    localStorage.setItem(LS_POSTS, JSON.stringify(posts));
};

/**
 * Adds an "updoot" (or a like) to the post specified
 * @param {number} postId - The numerical postId of the post
 * @param {string} username - The username of the user who is updooting
 */
const addUpdoot = (postId, username) => {
    let posts = getAllPosts();
    posts[postId].updoots.push(username);

    replacePosts(posts);
};

/**
 * Removes an updoot from a post.
 * @param {number} postId - The numerical postId of the post
 * @param {string} username - The username of the user who is removing the updoot
 */
const removeUpdoot = (postId, username) => {
    let posts = getAllPosts();

    // Finds the index of the username
    let index = posts[postId].updoots.indexOf(username);

    // If for whatever reason the index was not found, do nothing
    if (index === -1) return;

    // Removes the specific index and replace posts
    posts[postId].updoots.splice(index, 1);
    replacePosts(posts);
};

/**
 * The function description goes here.
 * @param {number} postId - The numerical id of the post
 * @param {object} comment - The object of the comment being added
 */
const addComment = (postId, comment) => {
    // Grabs the posts in local storage
    let posts = getAllPosts();

    // Adds the comment to the array
    posts[postId].comments.push(comment);

    // Puts the new posts information into local storage
    replacePosts(posts);
};

/**
 * Changes a comment on a post to the be whatever is passed through.
 * @param {number} postId - The numerical id of the post
 * @param {number} commentId - The numerical id of the comment
 * @param {object} comment - The object of the comment being added
 */
const editComment = (postId, commentId, comment) => {
    // Grabs the posts in local storage
    let posts = getAllPosts();

    // Change the comment in the array
    posts[postId].comments[commentId] = comment;

    // Puts the new posts information into local storage
    replacePosts(posts);
};

/**
 * Removes a comment from the post given.
 * @param {number} postId - The numerical postId of the post
 * @param {number} commentId - The numerical id of the comment
 */
const removeComment = (postId, commentId) => {
    // Grabs the posts in local storage
    let posts = getAllPosts();

    // Removes the comment to the array
    posts[postId].comments.splice(commentId, 1);

    // Puts the new posts information into local storage
    replacePosts(posts);
};

/**
 * Adds a reply to the comment given.
 * @param {number} postId - The numerical postId of the post
 * @param {number} commentId - The numerical id of the comment
 * @param {object} reply - The object of the reply being added
 */
const addReply = (postId, commentId, reply) => {
    // Grabs the posts in local storage
    let posts = getAllPosts();

    // Adds the comment to the array
    posts[postId].comments[commentId].replies.push(reply);

    // Puts the new posts information into local storage
    replacePosts(posts);
};

/**
 * Changes the reply to a comment to be whatever is passed through.
 * @param {number} postId - The numerical postId of the post
 * @param {number} commentId - The numerical id of the comment
 * @param {number} replyId - The numerical id of the reply
 * @param {object} reply - The object of the reply being changed
 */
const editReply = (postId, commentId, replyId, reply) => {
    // Grabs the posts in local storage
    let posts = getAllPosts();

    // Change the reply in the array
    posts[postId].comments[commentId].replies[replyId] = reply;

    // Puts the new posts information into local storage
    replacePosts(posts);
};

/**
 * Removes a reply using the post, comment, and reply ids.
 * @param {number} postId - The numerical postId of the post
 * @param {number} commentId - The numerical id of the comment
 * @param {number} replyId - The numerical id of the reply
 */
const removeReply = (postId, commentId, replyId) => {
    // Grabs the posts in local storage
    let posts = getAllPosts();

    // Removes the comment to the array
    posts[postId].comments[commentId].replies.splice(replyId, 1);

    // Puts the new posts information into local storage
    replacePosts(posts);
};

export {
    getAllPosts,
    createPost,
    editPost,
    removePost,
    removePostsByUser,
    addUpdoot,
    removeUpdoot,
    addComment,
    editComment,
    removeComment,
    addReply,
    editReply,
    removeReply,
};
