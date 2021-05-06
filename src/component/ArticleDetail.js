import React from 'react';
import axios from 'axios';

export default function ArticleDetail(props) {
  const detail = props.match.params;
    const [articleDetail, setArticleDetail] = React.useState([]);

      React.useEffect(() => {
         axios
            .get(`https://test.spaceflightnewsapi.net/api/v2/articles/${detail.id}`)
            .then((response) => response.data)
            .then((data) => {
              setArticleDetail(data);
            })
          }, []);

    return(
        <div>
            <h2 > {detail.title}</h2>
            <img src={detail.imageUrl} alt=""></img>
            <p>{detail.summary}</p>
            <h5>{detail.newsSite} - {articleDetail.publishedAt}</h5>
        </div>
    )
}