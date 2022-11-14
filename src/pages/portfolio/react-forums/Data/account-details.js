import { removePostsByUser } from './posts';
import { deleteAccount } from './accounts';

const LS_ACCOUNTS = 'account_details';

/**
 * Gets the details for all of the accounts in localStorage.
 * @return {object} An object
 */
const getAllDetails = () => {
    return JSON.parse(localStorage.getItem(LS_ACCOUNTS));
};

/**
 * Gets the details for a specified user.
 * @param {string} username - The user to get the information of
 * @return {object} The details of the user
 */
const getDetails = (username) => {
    let details = getAllDetails();
    return details[username];
};

/**
 * Creates some basic information for a new user.
 * @param {string} username - The user to create the information for.
 */
const setDefaultDetails = (username) => {
    let accountDetails = getAllDetails() ?? {};
    accountDetails[username] = {
        username: username,
        name: username,
        time: new Date(),
        bio: '',
        avatar: '',
    };
    setDetails(accountDetails);
};

/**
 * Sets the details for all users in localStorage.
 * @param {object} details - The details to replace the current localStorage details with
 */
const setDetails = (details) => {
    localStorage.removeItem(LS_ACCOUNTS);
    localStorage.setItem(LS_ACCOUNTS, JSON.stringify(details));
};

/**
 * Changes the information for that user in localStorage.
 * @param {object} details - The details for the user having their details changed.
 */
const changeDetails = (details) => {
    let d = getAllDetails();

    // Removes unnecessary field from the object
    delete details.email;
    d[details.username] = details;
    setDetails(d);
};

/**
 * Deletes the account and all information associated with the user from localStorage.
 * @param {string} username - The user to remove from localStorage
 */
const deleteAccountDetails = (username) => {
    let accountDetails = getAllDetails();
    delete accountDetails[username];

    // Remove all of the information for the user in accounts
    deleteAccount(username);
    removePostsByUser(username);

    setDetails(accountDetails);
};

export { getDetails, setDefaultDetails, changeDetails, deleteAccountDetails };
