
# ReactCrudInveon

This project is made for a homework assignment for Inveon bootcamp. It has the ability of adding tutorials (made of a title and a description), listing them, and filtering them using primitive string search filter.

I used [Mock API](https://mockapi.io) to mock a tutorials API, and generated data for it using ChatGPT.


To run it after you clone the repo:

    npm install
    npm start
## Possible Improvements
Primitive full-text search is fast, but it rarely gives you the result you're looking for, since the string you enter must be an exact match (case insensitive). There are better solutions for this problem, such as using [fuzzy search](https://www.google.com/search?q=fuzzy+search) algorithms. 

These algorithms work by measuring how close your search string and result are. They use substitution, deletion and insertion of characters on your search string, to measure the effort it takes to get the words in the result set. 

This is much better than primitive full-text search, not performance-wise, but for user experience.

#### Note:
This project assumes *happy path* happens for API requests. In a real-world application, you must always handle unexpected conditions.
