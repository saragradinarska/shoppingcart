import React from 'react';
import './App.css';



let listShoppingCartItems = [
  {
    title:'Goosebumps',
    image: 'https://bit.ly/2oJTqEl',
    description: 'Goosebumps is a horror series for children, that both humans and aliens can enjoy.',
    price: 75,
  },
  {
    title: 'Scrub Daddy',
    image: 'https://bit.ly/2WKznCb',
    description: 'Essential everyday household item for scrubbing away intergalactic stains.',
    price: 25,
  },
  {
    title: 'Sour Patch Kids',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91MrV0fbU3L._SL1500_.jpg',
    description: 'Perfect supernova candy to satisfy the black hole in your stomach.',
    price: 15,
  },
  {
    title: 'Airpods',
    image: 'https://bit.ly/2PKCEAa',
    description: 'The only companion you will need during your intergalactic journey.',
    price: 250,
  },
  {
    title: 'Vans',
    image: 'https://bit.ly/2C8efw2',
    description: 'Stylish,yet comfortable and provides Mars-compatible soles.',
    price: 150,
  }

]


function App() {
  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
      <SearchForm />
      <ShoppingCart />
     
     </div>
    

  );
  function Images(){
  return(
    <div className="image">
  </div>
  );
}

 function ShoppingCart() {

  const postsSequence = listShoppingCartItems.map((product) =>
    <Product title={product.title} image={product.image} description={product.description} price={product.price}/>
  );

   return(
     <div className="cart">
      {postsSequence}
     </div>
   );
 }

function Product(props) {
  return(
    <div className="product">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <img className="image" src={props.image}/>
      <div className= "description" >
        <p>{props.description}</p>
      </div>
      <div className= "price">
        <p>{props.price}</p>
      </div>
  </div>
)
  
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Discover" />
    </form>
  );
  }
}
export default App;
