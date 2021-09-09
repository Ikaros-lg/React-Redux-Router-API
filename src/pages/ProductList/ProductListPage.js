import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../../actions/actions';

class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    this.props.fetchList();
  }

  onDelete = (id) => {
    var products = this.state.products;
    var findIndex = this.findIndex(id);
    products.splice(findIndex, 1);
    this.setState({
      products : products
    });
  }

  findIndex = (id) => {
    var products = this.state.products;
    var findIndex = -1;
    if(products.length > 0){
      products.forEach((item, index) => {
        if(item.id === id) findIndex = index;
      })
    }
    return findIndex;
  }

  render() {
    var products = this.props.productState;

    return (
      <div>
        <h1 className="text-center mt-2 mb-4">PRODUCT LIST</h1>
        <Link
          to="/products/add"
          type="button"
          className="btn btn-primary mb-2 add-btn"
        >
          Add product
        </Link>
        <ProductList>{this.displayProductItem(products)}</ProductList>
      </div>
    );
  }

  displayProductItem = (products) => {
    if (products.length > 0) {
      var displayProductItem = products.map((item, index) => {
        return <ProductItem key={index} index={index+1} item={item} onDelete={this.onDelete}/>;
      });
    }
    return displayProductItem;
  };
}

const mapStateToProps = (state) => {
  return {
    productState : state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchList : () => {
      dispatch(actions.fetchList())
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
