import React from 'react';

const Question = ({question}) => {
    const que = question.question
    return (
        <div>
            {que}
        </div>
    );
};

export default Question;