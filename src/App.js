import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
import { useEffect } from 'react';
import React from 'react';
import { Elastic } from 'gsap/src';

function App() {

  useEffect(()=> {
    gsap.fromTo("#main-page-image-wrapper img",{
      x: -100,
      opacity: 0,
    },{
      x: 0,
      opacity: 1,
    });

    gsap.fromTo("#product-desc .letter",{
      top: 50,
      opacity: 0,
    },{
      duration: 0.2,
      stagger: 0.02,
      top: 0,
      opacity: 1,
    })

    gsap.fromTo("#product-pricing div",{
      opacity: 0,
      y: -20
    },{
      y: 0,
      opacity: 1,
      stagger: 0.1,
    })


  },[])


  return (
    <section className="dyeus-app">/

      <NavBar />
      <div id="main-page">
        
        <div id="main-page-image-wrapper">
          <img src="https://images.unsplash.com/photo-1611744669444-5edf2ce1dd56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhY2thZ2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="cannot display the image" />
        </div>

        <div id="product-section">

            <div id="product-section-content">
              <div id="product-brief-info">
                <div id="product-desc">
                <SplitWord>
                  <h1>Everyday rinse and reload.</h1>
                </SplitWord></div>
                <p>Achieve this dream skin goal with this complete package of skincare products that will rejuvenate your day.</p>
                <div id="product-ratings-reviews">
                  <div id="product-rating-div">
                      <div id="rating-stars">
                        

                      </div>
                      <div id='rating-reviews'>
                        <h1>4.5</h1>
                        <p onClick={() => {
                          document.getElementById('customer-reviews').classList.toggle('open');
                        }}>click to read reviews.</p>
                      </div>
                  </div>
                  <div id="customer-reviews">
                    <h2>Hear what our users have to say.</h2>
                    <CustomerReviewTemplate name="Rahul" review="This product is really great and amazing. Love this product"/>
                    <CustomerReviewTemplate name="Rakesh" review="I would definitely recommend this product to my friends and family members."/>
                    <CustomerReviewTemplate name="karthik" review=" This is really the complete skin care package, I have been using this product for as long as I remember and it is really great."/>
                  </div>
                </div>
              </div>
            </div>

          <div id="product-pricing">
            <div id="product-price-value">
              <h1>&#x20b9; 899</h1>
              <h1>&#x20b9; 1299</h1>
            </div>
            <div id="product-monthly-pack-pricing">
              <div id="one-month-pack">
                <div id="pack-info">
                  <div id="pack-tags">
                    <p>Most Popular</p>
                    <p>Best Results</p>
                  </div>
                  <div id="pack-details">
                    <h1>1 Month Pack</h1>
                    <p>Savings &#x20b9;200 </p>
                    <div id="saved-percent">
                      <h1>38% Saved this pack</h1>
                    </div>
                  </div>
                </div>
                <div id="pack-pricing">
                  <h1>&#x20b9; 595</h1>
                  <h1>&#x20b9; 795</h1>

                </div>
              </div>
              <div id="three-month-pack">
              <div id="pack-info">
                  <div id="pack-details">
                    <h1>3 Month Pack</h1>
                    <p>Savings &#x20b9;100 </p>
                    <div id="saved-percent">
                      <h1>12% Saved this pack</h1>
                    </div>
                  </div>
                </div>
                <div id="pack-pricing">
                  <h1>&#x20b9; 899</h1>
                  <h1>&#x20b9; 999</h1>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function SplitWord({children}){
  var word = React.Children.toArray(children);

  return word.map((letter) => {
    console.log(letter.props.children.split(''))
    return letter.props.children.split("").map((l) => {
        return <span className="letter">{l}</span>

    })
  })

}

function NavBar(){
  return <div id="nav-bar">

  </div>
}

function CustomerReviewTemplate({name,review}){
  return <div className="customer-review">
    <h1>{name}</h1>
    <p>{review}</p>
  </div>
}

export default App;
