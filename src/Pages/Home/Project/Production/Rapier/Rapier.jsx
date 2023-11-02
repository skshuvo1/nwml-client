import React from 'react';
import Navber from '../../../../Shared/Navber/Navber';
import Footer from '../../../../Shared/Footer/Footer';
import img from '../../../../../assets/noman16.jpg'
import RapierMC from './RapierMC';
const Rapier = () => {
    return (
        <div>
            <div className='sticky'>
            <Navber></Navber>
            </div>
            <h2 className=' font-bold text-center mb-8 pt-8 text-2xl'>Ra<span className='text-red-500'>pi</span>er </h2>
            <div className='flex flex-col lg:flex-row m-8 gap-8 mt-8 justify-center items-center'>
                <img className='w-full lg:w-2/3' src={img} alt="" />
                <div className='w-full lg:w-1/3 lg:-mt-24'>
                    <h2 className='text-center text-xl my-3 font-bold text-red-500 '>Rapier</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aperiam, necessitatibus aliquam odio tempora nostrum laudantium optio nobis sed voluptate ullam voluptatibus et voluptas dolore, adipisci saepe veniam! Ipsa eum deserunt, quam facere nemo exercitationem. Ipsum temporibus magnam inventore quibusdam eos necessitatibus qui tenetur quae. Id placeat sunt vitae beatae itaque. Non error molestiae ducimus molestias consequuntur assumenda dicta quasi tempore quam! Labore qui doloribus provident, error tempora mollitia omnis non ea asperiores officia, dolorum saepe laborum! Perferendis omnis corrupti consequuntur fugiat deleniti blanditiis eligendi laborum, maxime harum praesentium maiores fuga, aut culpa a est animi eius ex nobis ad.</p>
                </div>
            </div>
            <RapierMC></RapierMC>
            <Footer></Footer>
        </div>
       
    );
};

export default Rapier;