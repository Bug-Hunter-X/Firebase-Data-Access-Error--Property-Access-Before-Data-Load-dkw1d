# Firebase Data Access Error: Property Access Before Data Load

This repository demonstrates a common error in Firebase applications where you attempt to access properties of a document snapshot before the data has fully loaded. This typically results in an error because the property is undefined.

The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version using async/await to handle the asynchronous nature of Firebase data retrieval.

## How to Reproduce the Bug

1. Clone this repository.
2. Run `bug.js` (requires Firebase setup).
3. Observe the error message indicating that the property is undefined.

## Solution

The `bugSolution.js` file demonstrates the correct approach using async/await.  This ensures that the code waits for the data to be fully loaded before attempting to access properties, preventing the error.