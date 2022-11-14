import { setDefaultDetails } from './account-details';
import { createPost } from './posts';

// Constants for localStorage
const LS_USERS = 'users';
const LS_USER = 'user';

/**
 * Initialises the localStorage so that there is some information already available.
 */
const initialise = () => {
    // Don't create new localStorage if there already is some that exist
    if (localStorage.getItem(LS_USERS) !== null) return;

    // Create some default users for testing
    const users = [
        {
            username: 'smolalli',
            email: 'email@email.com',
            password: 'abc123',
        },
    ];

    // Add default users to localStorage
    setUsers(users);

    setUser('smolalli');

    // Add default bio information
    setDefaultDetails('smolalli');

    // Create some default posts
    createPost({
        username: 'smolalli',
        main: 'Hello world!',
        timestamp: new Date(),
        comments: [],
        updoots: [],
        image: '',
    });
};

/**
 * The function description goes here.
 * @param {string} user - The username of the person whose email is being changed
 * @param {string} email - The email to change to
 */
const changeEmail = (user, email) => {
    let users = getUsers();
    users[users.findIndex((e) => e.username === user)].email = email;

    setUsers(users);
};

/**
 * Getter for the email of the user given.
 * @param {string} user - The username of the user whose email is being got
 * @return {string} The email of the user given
 */
const getUserEmail = (user) => {
    let users = getUsers();
    return users[users.findIndex((e) => e.username === user)].email;
};

/**
 * Sets the users in localStorage with the given array.
 * @param {array} users - The array of user objects
 */
const setUsers = (users) => {
    localStorage.setItem(LS_USERS, JSON.stringify(users));
};

/**
 * Getter for the users array.
 * @return {array} An array of the user objects
 */
const getUsers = () => {
    // Extract user data from local storage and convert data to objects.
    return JSON.parse(localStorage.getItem(LS_USERS));
};

/**
 * Verifies if the email and password given match the information in localStorage.
 * @param {string} email - The email provided by the user
 * @param {string} password - The password provided by the user
 * @return {boolean} Whether or not the user passed the verification
 */
const verifyUser = (email, pass) => {
    // Checks if the user is in the array of users
    for (const e of getUsers()) {
        if (email === e.email && pass === e.password) {
            console.log('success');
            setUser(e.username);
            return true;
        }
    }

    return false;
};

/**
 * Creates an account for the user.
 * @param {object} userInfo - The information for the sign up given by the user
 * @return {boolean} Whether or not the user was signed up (i.e. if the email was already used)
 */
const signUpUser = (userInfo) => {
    // Get the users and check that the new user isn't a duplicate
    const users = getUsers();
    users.forEach((e) => {
        if (userInfo.email === e.email) {
            return false;
        }
    });

    // Clears out what was in localStorage before
    localStorage.removeItem(LS_USERS);

    // Adds new user to the array
    users.push({ ...userInfo });

    // Sets the array of users to the new array
    setUsers(users);

    // Set the current user
    setUser(userInfo.username);

    // Sets the information that displays in the Profile component
    setDefaultDetails(userInfo.username);
    return true;
};

/**
 * Sets the logged in user in localStorage.
 * @param {string} user - The username of the logged in user
 */
const setUser = (user) => {
    localStorage.setItem(LS_USER, user);
};

/**
 * Gets the logged in user from localStorage
 * @return {string} The logged in user
 */
const getUser = () => {
    return localStorage.getItem(LS_USER);
};

/**
 * Removes the logged in user from localStorage.
 */
function removeUser() {
    localStorage.removeItem(LS_USER);
}

/**
 * Deletes all information relating to a user from localStorage.
 * @param {string} username - The username of the user to be removed
 */
function deleteAccount(username) {
    let users = getUsers();
    let newUsers = users.filter((e) => e.username !== username);

    setUsers(newUsers);
    removeUser();
}

export { initialise, verifyUser, getUser, removeUser, signUpUser, deleteAccount, changeEmail, getUserEmail };
