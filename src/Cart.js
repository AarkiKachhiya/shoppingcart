function Cart(props) {
    return (
      <div>
        <h2>Your Cart</h2>
        {props.items.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    );
  }

  export default Cart;