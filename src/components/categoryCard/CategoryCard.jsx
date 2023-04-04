import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ item }) => {
  return (
    <Link to='/gigs?cat=design'>
      <div className='categoryCard'>
        <img src={item.img} alt='' />
        <span className='desc'>{item.description}</span>
        <span className='title'>{item.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
