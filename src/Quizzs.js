import React, { Component } from 'react';
import quizzs from './datas/quizzs.json';
import {Link} from "react-router-dom";

class Quizz extends Component {
    state = {  }


    render() { 
        let listQuizzs = quizzs.map(quizz => {
            return <article className="quizz"><Link to="">{quizz.name}</Link></article>
        })
        

        return ( 
            <div className="quizz">
                {listQuizzs}
            </div>
         );
    }
}
 
export default Quizz;