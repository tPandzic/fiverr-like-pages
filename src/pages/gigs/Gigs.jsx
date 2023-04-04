import React, { useState } from 'react';
import GigCard from '../../components/gigCard/GigCard';
import { gigs } from '../../data';
import './Gigs.scss';

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>FIVERR GRAPHIC & DESIGN </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology iwth Fiverr's AI artists
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input type='text' placeholder='min' />
            <input type='text' placeholder='max' />
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>Sort By</span>
            <span className='sortType'>
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <img src='./img/down.png' alt='' onClick={() => setOpen(!open)} />
            {open && (
              <div className='rightMenu'>
                {sort === 'sales' ? (
                  <span onClick={() => reSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reSort('sales')}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className='cards'>
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
