import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

class ProductActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      productId: "",
      name: "",
      img: "",
      price: "",
      status: false,
    };
  }

  componentDidMount() {
    if (this.props.match.location.state) {
      var product = this.props.match.location.state.product;
      this.setState({
        id: product.id,
        productId: product.productId,
        name: product.name,
        img: product.img,
        price: product.price,
        status: product.status,
      });
    }
  }

  s4 = () => {
    return Math.floor((Math.random() + 1) * 0x10000)
      .toString(16)
      .substring(1);
  };

  generateId = () => {
    return this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4();
  };

  onChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "status") {
      value = value === 'true' ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.id) {
      console.log(this.state);
      this.props.fetchEdit(
        {
          id: this.state.id,
          productId: this.state.productId,
          name: this.state.name,
          img: this.state.img,
          price: this.state.price,
          status: this.state.status,
        },
        this.props.match.history
      );
    } else {
      this.props.fetchAdd(
        {
          productId: this.generateId(),
          name: this.state.name,
          img: this.state.img,
          price: this.state.price,
          status: this.state.status,
        },
        this.props.match.history
      );
    }
  };

  onBack = () => {
    this.props.match.history.goBack();
  };

  render() {
    return (
      <form
        className="mt-4 px-2 py-2 col-xl-4"
        style={{ border: "1px solid black" }}
        onSubmit={this.onSubmit}
      >
        <label style={{ fontWeight: "bold" }}>Add product form:</label>
        <div className="form-group">
          <label>Enter product name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>Enter product image url:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Url"
            name="img"
            value={this.state.img}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>Enter product price:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            name="price"
            value={this.state.price}
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label>Example select</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="status"
            onChange={(event) => {this.onChange(event)}}
            value={this.state.status}
          >
            <option value={true}>Enabled</option>
            <option value={false}>Disabled</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          {this.state.id ? "Save" : "Add"}
        </button>
        <button type="button" className="btn btn-danger" onClick={this.onBack}>
          Back
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateState: state.productUpdate,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAdd: (product, history) => {
      dispatch(actions.fetchAdd(product, history));
    },
    fetchEdit: (product, history) => {
      dispatch(actions.fetchEdit(product, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
