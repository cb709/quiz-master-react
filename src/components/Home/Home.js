import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';
import './Home.css'

const Home = () => {
    const data = useLoaderData()
    const allQuiz = data.data;
    return (
        <div className='container home'>
            <h1>Attempt Quiz to see your progress ! </h1>
            <div className='quiz-card-contatiner'>
            {
                allQuiz.map(quiz => <QuizCard key={quiz.id} quiz={quiz}></QuizCard>)
            }
            </div>
        </div>
    );
};

export default Home;