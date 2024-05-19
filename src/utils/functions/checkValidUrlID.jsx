/**
 * Checks the validity of the URL ID against the current user ID.
 * @param {Function} setError - Function to set error state
 * @param {number} userId - The ID from the URL
 * @param {number} currentUserId - The current user's ID
 * @param {Function} setIsLoading - Function to set loading state
 * @returns {void}
 */
export const checkValidUrlID = (
  setError,
  userId,
  currentUserId,
  setIsLoading
) => {
  try {
    setError(false);
    // If user manually changes the URL ID to another ID
    if (userId !== currentUserId) {
      throw new Error();
    }
  } catch (error) {
    setError(true); // Allows showing error message
  }
  setIsLoading(false);
};
