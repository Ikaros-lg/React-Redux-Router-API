import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../../actions/actions';

class ProductItem extends React.Component {
  onDelete = (id) => {
    this.props.fetchDelete(id);
  };

  render() {
    var item = this.props.item;
    var status = item.status ? "Enabled" : "Disabled";
    var classStatus = item.status
      ? "badge badge-success"
      : "badge badge-warning";
    return (
      <tr>
        <th scope="row">{this.props.index}</th>
        <td>{item.productId}</td>
        <td>{item.name}</td>
        <td>
          <img src={item.img} alt={item.name} />
        </td>
        <td>{item.price}.00$</td>
        <td>
          <span className={classStatus}>{status}</span>
        </td>
        <td>
          <Link to={{
            pathname : `/products/${item.id}/edit`,
            state : {product : item}
          }} className="btn btn-secondary mr-1">
            Edit
          </Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.onDelete(item.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchDelete : (id) => {
      dispatch(actions.fetchDelete(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
