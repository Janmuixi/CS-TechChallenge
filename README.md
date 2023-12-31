## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
# yarn
yarn dev
```

## Thought process

Steps I followed:
```
1. Create the project and install libraries like Nuxt 3
2. Create a Nuxt layout and a main page
3. Build the navigation bar
4. Connect to the API using axios
5. Store backend in pinia as well as favorites
6. Create static Promo banner components
7. Create Popular and Recommended car lists
8. Add pagination to the Recommended cars list
9. Make search from search box resend request to API and refresh the list
10. Create footer
11. Create Car Details page
12. Make the two pages responsive
13. Add Nitro Proxy config to avoid CORS error
14. Add testing to pinia store functions
15. Fixed a few problems I had with responsiveness in the lists, so I changed from using margins and media queries to just using flex gaps and flex wraps
16. I added the empty state to the lists
```

Problems I faced:

```
1. There are duplicated ids on the backend's cars list, so I had to create a function to remove the cars with duplicated IDs from the list. But this means that sometimes I get 8 items from the api but I have to discard 7 of them, so the pagination looks a bit weird.
2. Using nuxt I had problems creating dynamic imports on local images, I would fix it with more time
```
