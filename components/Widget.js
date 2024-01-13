import React from 'react';
import './Widget.css';
import WidContent from './WidContent';

function Widget() {
  return (
    <div className='widget'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='widget__container'>
        <div className='widget__wrapper'>
          <ul className='widget__items'>
            <WidContent
              
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <WidContent
             
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='Widget__items'>
            <WidContent
              
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <WidContent
             
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <WidContent
              
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Widget;