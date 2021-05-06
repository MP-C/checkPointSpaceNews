import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom"
import Header from './component/Header';
import Main from './Main';
import ArticleList from './component/ArticleList'
import ArticleDetail from './component/ArticleDetail';

export default function App() {

  return (
    <div>
      <Switch>
        <Header title="SpaceNews" />
        <Route exact path="/" component={Main} />
        <Route path="/articlelist" component={ArticleList}/>
        <Route path="/article/:id" component={ArticleDetail} />
      </Switch>
    </div>
  );
}