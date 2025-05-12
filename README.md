# cookies-challenge

## Overview

This project demonstrates how to use cookies in an Express.js application. It includes the following features:

- Sets a cookie with the user's name when they visit the `/login` route with a query parameter (e.g., `/login?name=YourName`).
- Displays a personalized welcome message if a cookie with the user's name is present when visiting the `/` route.

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   node server/server.js
   ```

3. Visit the following routes in your browser:
   - Set your name: `http://localhost:8080/login?name=YourName`
   - View the welcome message: `http://localhost:8080/`

## Dependencies

- `express`
- `cookie-parser`

## Project Structure

```
package.json
README.md
server/
    package.json
    server.js
```

## License

This project is licensed under the MIT License.
