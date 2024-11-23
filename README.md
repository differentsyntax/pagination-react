## Paginated List from API
Task: You are required to fetch and display a paginated list of items from an API. The items represent products, each with the following attributes:

id: Unique identifier for the product.
name: Name of the product.
price: Price of the product.
category: Category of the product (e.g., "Electronics", "Clothing").
Requirements:
Fetch Data:

Fetch data from the provided API endpoint: https://fakestoreapi.com/products
The API supports pagination with the following query parameters:
page: The current page number (default: 1).
limit: The number of items per page (default: 10).
Example request: https://fakestoreapi.com/products?limit=5&page=1
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
