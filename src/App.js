import {Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import { AllReviews } from './components/AllReviews';
import { Auth } from './components/Auth';
import { Header } from './components/Header';
import { SingleReview } from './components/SingleReview';

function App() {
  const [user, setUser] = useState({username: "", avatar: ""})
  const [reviewsList, setReviewsList] = useState([])
  const [categories, setCategories] = useState([])
  return (
    <div className="App">
      <Header/>
      <Auth user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={< AllReviews reviewsList={reviewsList} setReviewsList={setReviewsList} categories={categories} setCategories={setCategories}/>} />
        <Route path="/reviews" element={< AllReviews reviewsList={reviewsList} setReviewsList={setReviewsList} categories={categories} setCategories={setCategories}/>} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
          </Routes>
    </div>
  );
}

export default App;
