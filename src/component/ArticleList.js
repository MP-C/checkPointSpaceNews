import React from 'react';
import Article from './Article';

export default function ArticleList( ) {
    const [searchWord, setSearchWord] = React.useState('');

    const [articlesList, setArticlesList] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://test.spaceflightnewsapi.net/api/v2/articles`)
            .then((res) => res.json())
            .then((data) => {
                setArticlesList(data);
            })
    }, []);

    const filterArticles = articlesList ? articlesList.filter((article) =>{
        return article.title.slice(0,searchWord.lenght).includes(searchWord)
    }) : [];

    return (
        <div>
            <input type="text"
                value={searchWord}
                onChange={e => setSearchWord(e.target.value)}
                placeholder="Searching subject"
            />
            {filterArticles.map((article) => {
                return (
                    <>
                        <Article
                            title={article.title}
                            summary={article.id}
                            newsSite={article.newsSite}
                            publishedAt={article.publishedAt}
                            imageUrl={article.imageUrl}
                        />
                    </>
                )
            })}
        </div>
    )
}