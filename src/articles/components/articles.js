import React from 'react';
import Article from './article';
import { getAllArticles } from '../api';
class Articles extends React.Component{
    componentDidMount(){
                //Make API Call 
        getAllArticles()
        .then((response)=>{
this.props.setArticles(response.data.articles);
        })
        .catch((error)=>{
console.log('API ERROR', error);
        });
        /**
         * INDEX,SHOW, DESTROY , UPDATE,CREATE
         */
    }
    render(){
        let allArticles =<h4>No Articles! </h4>;
        if(this.props.articles.length >0){
        allArticles = this.props.articles.map((article ,index)=>{
            return <Article title={article.title}
                            author={article.author}
                            content={article.content}
                            key={index}
            />;
        });
    }
        return(
            <>
<h3>All Articles</h3>
{allArticles}
</>
        );
    }
}
export default Articles;