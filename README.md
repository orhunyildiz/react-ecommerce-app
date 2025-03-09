# React E-commerce Application

React E-commerce Application is a React application that demonstrates a complete e-commerce style interface with category filtering, product listing, a shopping cart, and form demos. The project uses React, React Router, Reactstrap, and AlertifyJS to showcase component-based design and state management with class components. I developed this project to further my understanding and mastery of React.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Screenshots](#screenshots)
- [License](#license)
- [Author](#author)

## Features

- **Category Filtering:** Browse and filter products by category.
- **Product Listing:** Display a list of products with details such as product name, price, and stock.
- **Shopping Cart:** Add products to a shopping cart with options to remove items.
- **Form Demos:** Includes two form demo pages showcasing form handling and validations.
- **Responsive Navigation:** Uses Reactstrap for responsive UI components including navbar, dropdowns, and tables.
- **Alert Notifications:** Uses AlertifyJS for notifications when items are added or removed from the cart.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/orhunyildiz/react-ecommerce-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd pure-react-project
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the JSON Server for the mock API**  
   _Make sure you have a db.json file with categories and products_

   ```bash
   json-server --watch db.json
   ```

## Usage

1. **Run the development server:**

   ```bash
   npm start
   ```

2. **Open your browser and go to:** [http://localhost:3000](http://localhost:3000)

3. **Routes:**
   - `/` – Displays the Product List along with Category List.
   - `/cart` – Shows the Cart List with added products.
   - `/form1/` – Displays Form Demo 1.
   - `/form2/` – Displays Form Demo 2.
   - Any other path will render a "Not Found" page.

## Project Structure

```
pure-react-project/
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
├── package.json
└── README.md
```

## Technologies

- **React:** Front-end library for building user interfaces.
- **React Router:** For managing routing in the application.
- **Reactstrap:** Bootstrap components built for React.
- **AlertifyJS:** For showing alert notifications.
- **Bootstrap:** For styling and responsive design.
- **JSON Server:** For mock backend

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
