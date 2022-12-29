---
slug: node-express-app
title: Node Express App
authors: endi
tags: [hello, docusaurus]
sidebar_position: 1
---

In this tutorial, we will learn how to create a simple Node.js Express app that fetches data from an API and displays it on the user interface (UI) of a web application. Node.js is a JavaScript runtime that allows you to run JavaScript on the server, and Express is a web framework for Node.js that makes it easy to create web applications.

We will use the fetch() function, which is part of the JavaScript standard, to make a request to the API and retrieve the data. We will also use the map() function to loop through the data and create a list of items to display on the page. 

By the end of this tutorial, you will have learned how to create a simple Node.js Express app that fetches data from an API and displays it on the UI. Let's get started!


Here is an example of a simple Node.js Express app that makes a GET request to an API to retrieve data:

```jsx title="app.js"
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api', async (req, res) => {
  try {
    const response = await axios.get('https://example.com/api/data');
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

```

This app creates an endpoint at /api, which makes a GET request to https://example.com/api/data using the axios library. The response from the API is returned as the response to the client.

To start the app, you can run node app.js in your terminal. The app will listen for requests on port 3000.

To make a request to the API, you can use a tool like Postman or send a request using the fetch() function in the browser. For example:

```js
fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

```
This will send a GET request to the /api endpoint, and log the response data to the console.

### Display on UI

To display the API response on the user interface (UI) of a web application, you can use JavaScript to update the DOM with the data.

Here is an example of how you can use the fetch() function to make a request to an API and display the response data on the UI:

```js
// Make the API request
fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(data => {
    // Get a reference to the element where the data will be displayed
    const displayElement = document.getElementById('display');

    // Loop through the data and create a list item for each item
    const listItems = data.map(item => `<li>${item}</li>`).join('');

    // Set the inner HTML of the display element to the list items
    displayElement.innerHTML = `<ul>${listItems}</ul>`;
  })
  .catch(error => console.error(error));

```

This code makes a request to the /api endpoint and, when the response is received, parses the JSON data and displays it as a list on the page.

To use this code, you will need to include an element with the ID display in your HTML, where the data will be displayed.

```html
<div id="display"></div>
```