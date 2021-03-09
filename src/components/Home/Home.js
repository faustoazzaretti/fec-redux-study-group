import './Home.css'
import React from 'react';

const Home = () => (
    <>
        <div className="header">
            <h1>To do App</h1>   
        </div>
        <div className="workArea">
            <input type="text" placeholder="Add to do"/>
            <button>Add</button>
        </div>
    </>
)

export default Home;