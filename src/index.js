import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import StarRating from './StarRating';

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} setMovieRating={setMovieRating} />
//       <p>The movie was rating {movieRating} times</p>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating
      maxRating={10}
      size={24}
      color='red'
      className='testing react'
      message={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
