import React from "react";
import './ProductList.css';

class ProductList extends React.Component {
  render() {
    return(
      <form>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Product ID</th>
              <th scope="col">Product name</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <ProductItem/>
            <ProductItem/>
            <ProductItem/> */}
            {this.props.children}
          </tbody>
        </table>
      </form>
    );
  }
}

export default ProductList;
