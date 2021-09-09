import NotFoundPage from "../pages/404NotFound/404NotFoundPage";
import HomePage from "../pages/Home/HomePage";
import ProductListPage from "../pages/ProductList/ProductListPage";
import ProductActionPage from "../pages/ProductAcion/ProductActionPage";

const routes = [
    {
        path : '/',
        exact : true,
        component : <HomePage/>,
    },
    {
        path : '/products',
        exact : true,
        component : <ProductListPage/>,
    },
    {
        path : '/products/add',
        exact : true,
        component : (match) => {return <ProductActionPage match={match}/>},
    },
    {
        path : '/products/:id/edit',
        exact : true,
        component : (match) => {return <ProductActionPage match={match}/>},
    },
    {
        path : '',
        exact : false,
        component : <NotFoundPage/>,
    },
];

export default routes;