import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
import { useEffect } from 'react';
import React from 'react';
import './mobile.css';

function App() {

  useEffect(()=> {
    gsap.fromTo("#main-page-image-wrapper img",{
      y: -100,
      opacity: 0,
    },{
      y: 0,
      opacity: 1,
    });

    gsap.fromTo("#product-desc .letter",{
      top: 50,
      opacity: 0,
    },{
      duration: 0.4,
      stagger: 0.03,
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
          <img width="100%" height="100%" src="https://images.unsplash.com/photo-1611744669444-5edf2ce1dd56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhY2thZ2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="cannot display the image" />
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
                      <div id='rating-reviews'>
                        <div id="rating-stars">
                        <svg width="73" height="20" viewBox="0 0 73 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="73" height="20" rx="10" fill="#079741"/>
  <path d="M17.983 9.39094C17.9377 9.21978 17.8018 9.13421 17.6206 9.09142L14.7214 8.70633L13.4077 6.22464C13.2718 5.92512 12.7282 5.92512 12.5923 6.22464L11.2786 8.66354L8.42469 9.09142C8.24349 9.09142 8.10759 9.21978 8.01699 9.39094C7.97169 9.56209 8.01699 9.73324 8.15289 9.81881L10.2367 11.7443L9.73839 14.4827C9.69309 14.6538 9.78369 14.825 9.91959 14.9106C10.0555 14.9961 10.2367 15.0389 10.4179 14.9534L13 13.6697L15.5821 14.9534C15.6727 14.9534 15.718 14.9534 15.8086 14.9534C15.8992 14.9534 15.9898 14.9106 16.0804 14.8678C16.2163 14.7822 16.3069 14.6111 16.2616 14.4399L15.7633 11.7015L17.8471 9.77603C17.983 9.69045 18.0283 9.5193 17.983 9.39094Z" fill="#DADADA"/>
  <path d="M29.983 9.39094C29.9377 9.21978 29.8018 9.13421 29.6206 9.09142L26.7214 8.70633L25.4077 6.22464C25.2718 5.92512 24.7282 5.92512 24.5923 6.22464L23.2786 8.66354L20.4247 9.09142C20.2435 9.09142 20.1076 9.21978 20.017 9.39094C19.9717 9.56209 20.017 9.73324 20.1529 9.81881L22.2367 11.7443L21.7384 14.4827C21.6931 14.6538 21.7837 14.825 21.9196 14.9106C22.0555 14.9961 22.2367 15.0389 22.4179 14.9534L25 13.6697L27.5821 14.9534C27.6727 14.9534 27.718 14.9534 27.8086 14.9534C27.8992 14.9534 27.9898 14.9106 28.0804 14.8678C28.2163 14.7822 28.3069 14.6111 28.2616 14.4399L27.7633 11.7015L29.8471 9.77603C29.983 9.69045 30.0283 9.5193 29.983 9.39094Z" fill="#DADADA"/>
  <path d="M41.983 9.39094C41.9377 9.21978 41.8018 9.13421 41.6206 9.09142L38.7214 8.70633L37.4077 6.22464C37.2718 5.92512 36.7282 5.92512 36.5923 6.22464L35.2786 8.66354L32.4247 9.09142C32.2435 9.09142 32.1076 9.21978 32.017 9.39094C31.9717 9.56209 32.017 9.73324 32.1529 9.81881L34.2367 11.7443L33.7384 14.4827C33.6931 14.6538 33.7837 14.825 33.9196 14.9106C34.0555 14.9961 34.2367 15.0389 34.4179 14.9534L37 13.6697L39.5821 14.9534C39.6727 14.9534 39.718 14.9534 39.8086 14.9534C39.8992 14.9534 39.9898 14.9106 40.0804 14.8678C40.2163 14.7822 40.3069 14.6111 40.2616 14.4399L39.7633 11.7015L41.8471 9.77603C41.983 9.69045 42.0283 9.5193 41.983 9.39094Z" fill="#DADADA"/>
  <path d="M53.983 9.39094C53.9377 9.21978 53.8018 9.13421 53.6206 9.09142L50.7214 8.70633L49.4077 6.22464C49.2718 5.92512 48.7282 5.92512 48.5923 6.22464L47.2786 8.66354L44.4247 9.09142C44.2435 9.09142 44.1076 9.21978 44.017 9.39094C43.9717 9.56209 44.017 9.73324 44.1529 9.81881L46.2367 11.7443L45.7384 14.4827C45.6931 14.6538 45.7837 14.825 45.9196 14.9106C46.0555 14.9961 46.2367 15.0389 46.4179 14.9534L49 13.6697L51.5821 14.9534C51.6727 14.9534 51.718 14.9534 51.8086 14.9534C51.8992 14.9534 51.9898 14.9106 52.0804 14.8678C52.2163 14.7822 52.3069 14.6111 52.2616 14.4399L51.7633 11.7015L53.8471 9.77603C53.983 9.69045 54.0283 9.5193 53.983 9.39094Z" fill="#DADADA"/>
  <path d="M65.983 9.39094C65.9377 9.21978 65.8018 9.13421 65.6206 9.09142L62.7214 8.70633L61.4077 6.22464C61.2718 5.92512 60.7282 5.92512 60.5923 6.22464L59.2786 8.66354L56.4247 9.09142C56.2435 9.09142 56.1076 9.21978 56.017 9.39094C55.9717 9.56209 56.017 9.73324 56.1529 9.81881L58.2367 11.7443L57.7384 14.4827C57.6931 14.6538 57.7837 14.825 57.9196 14.9106C58.0555 14.9961 58.2367 15.0389 58.4179 14.9534L61 13.6697L63.5821 14.9534C63.6727 14.9534 63.718 14.9534 63.8086 14.9534C63.8992 14.9534 63.9898 14.9106 64.0804 14.8678C64.2163 14.7822 64.3069 14.6111 64.2616 14.4399L63.7633 11.7015L65.8471 9.77603C65.983 9.69045 66.0283 9.5193 65.983 9.39094Z" fill="black"/>
  </svg>



                        </div>
                        <h1>4.0</h1>
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
