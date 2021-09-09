import * as apiType from "../constants/apiType";
import callAPI from "../utils/api";

export const getList = (products) => {        //action sent to reducer to get list products
  return {
    type: apiType.apiList,
    products: products,
  };
};

export const fetchList = () => {
  //call to get API list in ProductListPage.js  => call getList action to save products to redux store
  return (dispatch) => {
    return callAPI("GET", "products", null).then((response) => {
      dispatch(getList(response.data));
    });
  };
};

export const deleteProduct = (id) => {         //action sent to reducer to delete product
    return {
        type : apiType.apiDelete,
        id : id,
    }
}

export const fetchDelete = (id) => {             //call api to delete => call deleteProduct
    return (dispatch) => {
        return callAPI('DELETE', `products/${id}`, null).then((reponse) => {
            dispatch(deleteProduct(id));
        })
    }
}

export const addProduct = (product) => {
  return {
    type : apiType.apiAdd,
    product : product,
  }
} 

export const fetchAdd = (product, history) => {
  return (dispatch) => {
    return callAPI('POST', 'products', product).then((reponse) => {
      dispatch(addProduct(product));
      history.goBack();
    })
  }
}

export const editProduct = (product) => {
  return { 
    type : apiType.apiEdit,
    product : product
  }
}

export const fetchEdit = (product, history) => {
  return (dispatch) => {
    return callAPI('PUT', `products/${product.id}`, product).then((response) => {
      dispatch(editProduct(response.data));
      history.goBack();
    })
  }
}



