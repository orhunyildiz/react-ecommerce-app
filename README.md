# React E-commerce Application

React E-commerce Application is a React application that demonstrates a complete e-commerce style interface with category filtering, product listing, a shopping cart, and form demos. The project uses React, React Router, Reactstrap, and AlertifyJS to showcase component-based design and state management with class components. I developed this project to further my understanding and mastery of React.

## Table of Contents

-   [React E-commerce Application](#react-e-commerce-application)
    -   [Table of Contents](#table-of-contents)
    -   [Features](#features)
    -   [Installation](#installation)
    -   [Local Development](#local-development)
    -   [Usage](#usage)
    -   [Deployment](#deployment)
        -   [React Application (Vercel)](#react-application-vercel)
        -   [JSON Server (Render)](#json-server-render)
    -   [Project Structure](#project-structure)
    -   [Technologies](#technologies)
    -   [Contributing](#contributing)
    -   [Screenshots](#screenshots)
        -   [Home](#home)
        -   [Filtering and Add Cart Function](#filtering-and-add-cart-function)
        -   [Cart and Remove Function](#cart-and-remove-function)
        -   [Form Demo 1](#form-demo-1)
        -   [Form Demo 2](#form-demo-2)
    -   [License](#license)
    -   [Author](#author)

## Features

-   **Category Filtering:** Browse and filter products by category.
-   **Product Listing:** Display a list of products with details such as product name, price, and stock.
-   **Shopping Cart:** Add products to a shopping cart with options to remove items.
-   **Form Demos:** Includes two form demo pages showcasing form handling and validations.
-   **Responsive Navigation:** Uses Reactstrap for responsive UI components including navbar, dropdowns, and tables.
-   **Alert Notifications:** Uses AlertifyJS for notifications when items are added or removed from the cart.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/orhunyildiz/react-ecommerce-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd react-ecommerce-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Configuration:**
    - Ensure you have a valid `db.json` file inside the `api/` directory with your categories and products data.
    - If needed, update API endpoints in the code to point to your deployed JSON Server service.

## Local Development

For local development, run both the React application and the JSON Server concurrently by executing:

```bash
npm run dev
```

-   **React Application:** Accessible at [http://localhost:3000](http://localhost:3000)
-   **JSON Server:** Accessible at [http://localhost:3001](http://localhost:3001)

## Usage

1. **Run the development environment:**

    - Execute `npm run dev` and open your browser to [http://localhost:3000](http://localhost:3000).

2. **Routes:**
    - `/` – Displays the Product List along with the Category List.
    - `/cart` – Shows the Cart List with added products.
    - `/form1/` – Displays Form Demo 1.
    - `/form2/` – Displays Form Demo 2.
    - Any other path will render a "Not Found" page.

## Deployment

### React Application (Vercel)

-   The React application is deployed on Vercel and can be accessed at:  
    [https://react-ecommerce-app-delta-nine.vercel.app/](https://react-ecommerce-app-delta-nine.vercel.app/)
-   **Vercel Settings:**
    -   **Build Command:** `npm run build`
    -   **Output Directory:** `build`

### JSON Server (Render)

-   The JSON Server is deployed separately on Render.
-   **Production Start Command:** Render runs the `start` script defined in package.json, which is set to use a custom server file.
-   **server.js Example:**

    ```javascript
    const jsonServer = require("json-server");
    const server = jsonServer.create();
    const router = jsonServer.router("api/db.json");
    const middlewares = jsonServer.defaults();

    server.use(middlewares);

    // Add CORS header to allow external requests
    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });

    server.use(router);
    server.listen(process.env.PORT || 3001, () => {
        console.log("JSON Server is running");
    });
    ```

-   **Deployment Steps on Render:**
    -   **Build Command:** `npm install` (if you're not building a React app)
    -   **Start Command:** `npm start` (which runs `node server.js`)
-   **Note:** Update API URLs in your React application to point to your Render JSON Server URL if needed.

## Project Structure

```
react-ecommerce-app/
├── public/
├── src/
│   ├── components/
│   │   ├── App.js         // Main component that sets up routes and state management
│   │   ├── Navi.js        // Navigation component with links and cart summary
│   │   ├── CategoryList.js// Category list for filtering products
│   │   ├── ProductList.js // Displays list of products with an "add to cart" functionality
│   │   ├── CartList.js    // Table that shows the shopping cart details
│   │   ├── CartSummary.js // Dropdown summary of the cart items in the navbar
│   │   ├── FormDemo1.js   // Simple form demonstration using uncontrolled inputs
│   │   ├── FormDemo2.js   // Form demo using Reactstrap components with AlertifyJS notifications
│   │   └── NotFound.js    // Fallback component for unknown routes
│   ├── index.js           // Renders the App component within BrowserRouter
│   └── reportWebVitals.js // For measuring performance
├── api/
│   └── db.json            // JSON data for categories and products
├── server.js              // Custom server file to run JSON Server with CORS support
├── package.json
└── README.md
```

## Technologies

-   **React:** Front-end library for building user interfaces.
-   **React Router:** For managing routing in the application.
-   **Reactstrap:** Bootstrap components built for React.
-   **AlertifyJS:** For showing alert notifications.
-   **Bootstrap:** For styling and responsive design.
-   **JSON Server:** For a mock backend API.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-new-feature`).
5. Open a pull request.

## Screenshots

### Home

![Home](https://i.imgur.com/3PJA5w6.png)

### Filtering and Add Cart Function

![Filtering](https://i.imgur.com/r4ZI6We.png)

### Cart and Remove Function

![Cart and Remove Function](https://i.imgur.com/aRkSk6P.png)

### Form Demo 1

![Form Demo 1](https://i.imgur.com/mO3OopX.png)

### Form Demo 2

![Form Demo 2](https://i.imgur.com/VHQTx22.png)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Orhun Yildiz
