# GustoGo

GustoGo is a modern food delivery web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It offers users a seamless experience for ordering food online, integrating various services like Cloudinary for image storage, Stripe for payment processing, and Render.com for deployment.

## Features

- **User Authentication:** Secure user authentication with Auth0.
- **Food Ordering:** Browse through a menu of delicious meals, add them to your cart, and place an order with ease.
- **Real-Time Updates:** Stay updated on the status of your order in real time.
- **Image Uploads:** Seamlessly upload and manage food images using Cloudinary.
- **Secure Payments:** Integrated Stripe for secure and smooth payment processing.
- **Responsive Design:** Fully responsive design, providing a smooth experience across all devices.

## Tech Stack

- **Frontend:**
  - React.js: JavaScript library for building user interfaces.
  - Redux: State management for React applications.
  - Axios: Promise-based HTTP client for making API requests.
  - CSS/SCSS: Styling the application.

- **Backend:**
  - Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing user data, orders, and menu items.
  - Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
  - Stripe API: Payment processing for handling transactions.

- **Cloud Services:**
  - Cloudinary: Cloud-based image management for uploading, storing, and delivering images.
  - Render.com: Cloud platform used for deploying the application.

- **Authentication:**
  - Auth0: Authentication and authorization as a service.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas)
- A Cloudinary account
- A Stripe account
- Auth0 account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/gustogo.git
   cd gustogo
   ```

2. **Install dependencies:**

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   cd ..
   ```

3. **Set up environment variables:**

   - **Client-side:** Create a `.env` file in the `client` directory and add your environment variables:

     ```plaintext
     VITE_AUTH0_DOMAIN=your_auth0_domain
     VITE_AUTH0_CLIENT_ID=your_auth0_client_id
     VITE_AUTH0_REDIRECT_URI=your_auth0_redirect_uri
     VITE_BASE_URL=your_base_url
     VITE_AUTH0_AUDIENCE=your_auth0_audience
     ```

   - **Server-side:** Create a `.env` file in the `server` directory and add your environment variables:

     ```plaintext
     PORT=your_port_number
     MONGO_URI=your_mongo_connection_string
     
     #Auth0
     AUTH0_AUDIENCE=your_auth0_audience
     AUTH0_ISSUER_BASE_URL=your_auth0_issuer_base_url
     
     #Cloudinary
     CLOUD_NAME=your_cloudinary_cloud_name
     API_KEY=your_cloudinary_api_key
     API_SECRET=your_cloudinary_api_secret
     
     #Stripe
     FRONTEND_URL=your_frontend_url
     STRIPE_API_KEY=your_stripe_api_key
     STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
     ```

4. **Run the application:**

   - **Server side:**
     ```bash
     cd server
     npm run dev
     ```

   - **Client side:**
     Open a new terminal window, then:
     ```bash
     cd client
     npm start
     ```

### Deployment

The application is deployed on Render.com. To deploy:

1. Push your code to a Git repository (e.g., GitHub).
2. Connect your repository to Render.com.
3. Set up the environment variables on Render.
4. Deploy the application.

## Usage

- **Browse Menu:** Navigate through the menu to explore various food options.
- **Place Order:** Add items to your cart, proceed to checkout, and place your order.
- **Manage Orders:** Track your orders and see the history of your past orders.

## Contributing
Special thanks to : Sai Srunith (silvery.s@northeastern.edu)
Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [prasanna.vi@northeastern.edu](mailto:prasanna.vi@northeastern.edu) or [silvery.s@northeastern.edu](mailto:silvery.s@northeastern.edu).
