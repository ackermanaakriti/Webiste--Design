import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './News.css'
import { Grid } from '@mui/material';


const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const[query,setQuery]=useState('technology')

  useEffect(() => {
    const fetchNews = async () => {
      try {
       
        const apiUrl = `https://gnews.io/api/v4/search?q=${query}&apikey=362ae1448976ca2b4b9b175668046c64`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)

          setArticles(data.articles);
        
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);



  return (
    <div className='news-card--wrapper'>
     
      <ul xs={3}>
        {articles.map((article, index) => (
          <li xs={3} key={index}>
            <img src={article.image}/>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
           <button><a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            </button> 
          </li >
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
