import { RootState } from "../../state/Store";
import { Container, Button, Table, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../interface/Interface";
import { AppDispatch } from "../../state/Store";
import { delet, clearCart } from "../../state/CartSlice";

function Cart() {
  const carts = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const deletfromCart = (cartId: number) => {
    dispatch(delet(cartId));
  };

  const totaPrice = carts
    .reduce((acc: number, cart: Product) => acc + cart.price, 0)
    .toFixed(2);

  return (
    <>
      <h1>Welcome to Cart</h1>

      <Container>
        <Button
          variant="danger"
          className="mb-2 mt-2"
          onClick={() => dispatch(clearCart())}
        >
          Clear
        </Button>
        <span>Total Price: {totaPrice}$</span>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Total</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart: Product) => (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>{cart.title}</td>
                <td>
                  <Image src={cart.image} alt={cart.title} style={{ width: "50px", height: "50px" }} />
                </td>
                <td>{cart.price}$</td>
                <td>{cart.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => deletfromCart(cart.id)}
                  >
                    Remove from Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
