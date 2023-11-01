import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Section from './Section';

const Sections = () => {
    const [sections, setSections] = useState([])
    console.log(sections);

    useEffect(() => {
        fetch(`http://localhost:5000/section`)
            .then(res => res.json())
            .then(data => setSections(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
            <h2 className='font-bold text-center text-2xl my-8'>Production <span className='text-red-500'> Sections </span>Are</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
            {
                sections.map(section => <Section
                    key={section.id}
                    section={section}
                ></Section>)
            }
            </div>
        </div>
    );
};

export default Sections;