import React, { Component } from 'react';

class Questions extends Component {
    state = {  }
    render() { 

        let listQuestions = animaux.map(question => {
            let listAnswers = question.answers.map(answer => {
                console.log(answer);
                return <li>{answer}</li>
            })
            return <article className="question">
                    <p>{question.title}</p>
                     
                    <ul>
                        {listAnswers}
                    </ul>
                    </article>
        });

        return (
            <div className="questions">
                {listQuestions}
            </div>

         );
    }
}
 
export default Questions;