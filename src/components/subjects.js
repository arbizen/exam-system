import React, {useState} from 'react';
import Subject from '../components/subject';
import Title from './title';

const Subjects = () => {

    const [subjects, setSubjects] = useState([
        {
            name: 'Bangla 1st Paper',
            date: '11th September, 2020',
            time: '50 mins',
            startAt: '11 AM',
            des: 'Bangla MCQs are made with three possible combination from the book. You have to answer them all within the given time.'
        },
        {
            name: 'Bangla 1st Paper',
            date: '11th September, 2020',
            time: '50 mins',
            startAt: '11 AM',
            des: 'Bangla MCQs are made with three possible combination from the book. You have to answer them all within the given time.'
        },
        {
            name: 'Bangla 1st Paper',
            date: '11th September, 2020',
            time: '50 mins',
            startAt: '11 AM',
            des: 'Bangla MCQs are made with three possible combination from the book. You have to answer them all within the given time.'
        },
        {
            name: 'Bangla 1st Paper',
            date: '11th September, 2020',
            time: '50 mins',
            startAt: '11 AM',
            des: 'Bangla MCQs are made with three possible combination from the book. You have to answer them all within the given time.'
        }
    ]);

    return (
        <>
        <Title>Choose a subject</Title>
        <div className='subjects'>
            {subjects.map((s, i) => {
                return (
                    <Subject 
                    key={i}
                    name={s.name} 
                    date={s.date} 
                    time={s.time} 
                    startAt={s.startAt} 
                    des={s.des} />
                )
            })}
        </div>
        </>
    )
}

export default Subjects;