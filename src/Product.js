function Product(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <button onClick={props.onClick}>Add to Cart</button>
      </div>
    );
  }

  export default Product;