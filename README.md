# Trending Topics Explorer

## Description
Trending Topics Explorer is a web application that allows users to explore popular and trending content from multiple sources like GitHub, News, and Reddit using real-time public APIs.

---

## Objective of the Project
The objective of this project is to demonstrate the use of JavaScript, API integration, and dynamic UI rendering by building an application that fetches and displays real-time trending data. It also aims to implement search, filtering, and sorting using array higher-order functions.

---

## Core Features
- Fetch and display trending data from GitHub, News, and Reddit
- Display relevant details such as titles, stars, language, and upvotes
- Responsive layout for different screen sizes

---

## Interactive Features
- Search repositories or topics by name
- Filter results based on language or category
- Sort data (e.g., by stars or popularity)
- Switch between multiple data sources (GitHub, News, Reddit)

---

## Additional Features
- Loading indicator during API calls
- Clean and minimal UI design
- Dynamic content rendering without page reload
- Scalable structure for adding more APIs in future

---

## APIs Used
- GitHub API  
  https://api.github.com/search/repositories?q=stars:>10000&sort=stars  

- News API (GNews)  
  https://gnews.io/api/v4/top-headlines?lang=en&token=YOUR_API_KEY  

- Reddit API  
  https://www.reddit.com/r/all/top.json?limit=20  

---

## Technologies Used
- HTML  
- CSS  
- JavaScript (Fetch API, Array Higher-Order Functions)

---

## How to Run the Project
1. Clone the repository  
2. Open the project folder  
3. Add your API key for the News API  
4. Open `index.html` in your browser  

---

## Conclusion
This project demonstrates how multiple APIs can be integrated into a single application to provide meaningful and dynamic content. It highlights the use of JavaScript concepts like fetch, array methods, and DOM manipulation to build an interactive and responsive web application.