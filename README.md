# Building a single page of an e-commerce website
## Tech Stack
- JS Framework: React
- Store Management: Redux
- Middleware: Redux Thunk
- HTTP Client: Axios
- Styles: Tailwind

### Products data is fetched from `data.json` stored in `public` folder.

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`
Builds the app for production to the `build` folder.

# Discount widget
Created a JS widget named `discount.widget.js` with a function named `setDiscount`.
When called on any web page, it appends the discounted price (if applicable) right below the actual price.

For demo purposes, it is placed in the `src/common` folder and used in `App.js`.
