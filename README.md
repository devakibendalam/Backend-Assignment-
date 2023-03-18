# Backend-Assignment
Data Source
THIRD PARTY API URL : https://s3.amazonaws.com/roxiler.com/product_transaction.json
REQUEST METHOD : GET
RESPONSE FORMAT : JSON

# 1.Create API to initialize the database
To run this code, you need to follow these steps:
Install Node.js on your computer if it is not already installed. You can download the latest version of Node.js from the official website: https://nodejs.org/en/.

Create a new directory for your project and navigate into it using your terminal or command prompt.

Create a new file called Database Initialize API.js

Open your terminal or command prompt, navigate to the project directory, and run the following command to install the required dependencies:

npm install express axios mongodb
Start the server by running the following command:
node Database Initialize.js

This will start the server and initialize the database with seed data. You should see a message in your terminal that says "Server listening at http://localhost:3000".

Now you can test the server by sending requests to http://localhost:3000.

Instruction
All the APIs below should take month ( expected value is any month between January to
December ) as an input and should be matched against the field dateOfSale regardless of
the year.


# 2.Create an API for statistics
You can test the server by sending a GET request to http://localhost:3000/statistics/{month}, where {month} is the name of the month you want to get statistics for (e.g. http://localhost:3000/statistics/january). The server will return a JSON object containing the total sale amount, total number of sold items, and total number of not sold items for the selected month.


# 3.Create an API for bar chart
Once the application is running, you can access the endpoints in your web browser or using a tool like Postman. In this particular case, you can access the /bar-chart/:month endpoint by replacing :month with the name of the month you want to generate a bar chart for (e.g., /bar-chart/january).

Note that if you're running the application on a remote server, you will need to replace http://localhost in the endpoint URLs with the appropriate IP address or domain name.


# 4.Create an API for pie chart
In your web browser, go to http://localhost:3000/pie-chart/<month>, replacing <month> with the number of the month you want to get data for (e.g. http://localhost:3000/pie-chart/1 for January). You should see a JSON object with the counts for each category of product sold in that month.
  
  
# 5.Create an API which fetches the data from all the 3 APIs mentioned above, combines the response and sends a final response of the combined JSON
This will start the server and it will be listening on port 3000. You can then access the endpoint for combined data by navigating to http://localhost:3000/combined-data/:month in your browser or making a GET request to this endpoint using a tool like Postman or cURL, where :month is the month for which you want to retrieve the data (e.g. http://localhost:3000/combined-data/3 for March).
  






