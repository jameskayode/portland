import React from 'react';
//import emailjs from '@emailjs/browser';

import {
    FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  
  FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  
  return (
    <section className='scroll-behavior: smooth' id='footer'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' >
    <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>GuruTech</h1>




      <div className='py-4 '>
      <form className='bg-gray-600 px-2' action='https://mail.google.com/mail/?view=cm&fs=1&to=jameskayode39gmail.com&su=GeneralComment&body=Body' target="_blank" rel="noopener noreferrer">
          <input type="email" name='user_email' placeholder='Enter your email address' className='rounded-full bg-white text-center text-black font-semibold   p-2 px-8 items-center justify-center justify-self-center md:px-4 md:p-2'/>
        
         
          <button className='text-xl mx-3 font-bold text-[#00df9a]'>Get Started</button>
         
        </form>
        </div>



      <div className='flex justify-between md:w-[75%] my-6'>
    <div>
        <a href="https://www.facebook.com" className="" target="_blank" rel="noopener noreferrer"><FaFacebookSquare size={30} />
          
          </a>
          </div>
          <div>
            <a href="https://twitter.com/James_Kayode39" target="_blank" rel="noopener noreferrer"> <FaTwitterSquare size={30} /></a>
         
          </div>
          <div><a href="https://github.com/jameskayode" target="_blank" rel="noopener noreferrer"> <FaGithubSquare size={30} /></a></div>
         <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=jameskayode39gmail.com&su=GeneralComment&body=Body"   target="_blank" rel="noopener noreferrer"> <FaDribbbleSquare size={30} />
         </a>
         </div>
         
      </div>
    </div>
    <div className='lg:col-span-2 flex justify-between mt-6'>
  <div>
      <h6 className='font-medium text-gray-400'>Solutions</h6>
      <ul>
          <li className='py-2 text-sm'>Analytics</li>
          <li className='py-2 text-sm'>Marketing</li>
          <li className='py-2 text-sm'>Commerce</li>
          <li className='py-2 text-sm'>Insights</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Contact</h6>
      <ul>
          <li className='py-2 text-sm'>jameskayode39@gmail.com</li>
          <li className='py-2 text-sm'>+234 7067810860</li>
        
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Company</h6>
      <ul>
          <li className='py-2 text-sm'>About</li>
          <li className='py-2 text-sm'>Blog</li>
          <li className='py-2 text-sm'>Jobs</li>
        
          <li className='py-2 text-sm'>Careers</li>
      </ul>
  </div>
  <div>
      <h6 className='font-medium text-gray-400'>Legal</h6>
      <ul>
          <li className='py-2 text-sm'>Claim</li>
          <li className='py-2 text-sm'>Policy</li>
          <li className='py-2 text-sm'>Terms</li>
      </ul>
  </div>
    </div>
  </div>
</section>
);
};

export default Footer;
