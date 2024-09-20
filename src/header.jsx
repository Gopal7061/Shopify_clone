import React from 'react'
import "./header.css";
const header = () => {
  return (
    <div className='header'>
        <div className="left">
            <div className="top">
                <h1>
                Making Commerce Better for Everyone</h1>
                <p>Shopify is supporting the next generation of entrepreneurs, the world’s biggest brands, and everyone in between</p>
            </div>
            <div className="bottom">
                <button>Start free Trial</button>
                <p>Get 3 days free then 1 month for $20.</p>
            </div>
        </div>
        <div className="right">
            <button>⏵ Watch shopify story</button>
        </div>
    </div>
  )
}

export default header
