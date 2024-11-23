## Paginated List from API
Task: You are required to fetch and display a paginated list of items from an API. The API by default does not support pagination so implement it by slicing the data accordingly. The items represent products, each with the following attributes:

id: Unique identifier for the product.
name: Name of the product.
price: Price of the product.
category: Category of the product (e.g., "Electronics", "Clothing").
Requirements:

Fetch Data:

Fetch data from the provided API endpoint: https://fakestoreapi.com/products
The API supports pagination with the following query parameters:
page: The current page number (default: 1).
limit: The number of items per page (default: 5).

Display Data:

Display the list of products in a visually clean format (e.g., table or card layout).
Each item should display:
name
price
category

Pagination Controls:

Add "Next" and "Previous" buttons to navigate between pages.
The "Previous" button should be disabled on the first page.
The "Next" button should be disabled when there are no more items to fetch.
Loading State:

Show a loading indicator while fetching data from the API.

Error Handling:

Display an appropriate error message if the API request fails.

<img width="1216" alt="Screenshot 2024-11-22 at 8 31 05 PM" src="https://github.com/user-attachments/assets/5b665238-467b-465f-a5f6-8d0e976f6963">

