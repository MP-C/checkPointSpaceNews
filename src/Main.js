import React from 'react';
import ArticleList from './component/ArticleList';

export default function Main({title}) {
    
    return (
      <div>
          <ArticleList title={title} />
      </div>  
    )  
};