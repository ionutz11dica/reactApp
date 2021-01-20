export function addProductToShoppingCart(product) {
    return {
        type: "products/addToCart", payload: product.id
    };
}

export function showProduct(product) {
    return {
        type: "products/show", payload: product.id
    };
}

export function setProducts(products) {
    return {
        type: "products/set", payload: products
    };
}

export function searchList(query) {
    return {
        type: "products/search", payload: query
    };
}

export function filterBySize(query) {
    return {
        type: "products/filterBySize", payload: query
    };
}

export function filterByColour(query) {
    return {
        type: "products/filterByColour", payload: query
    };
}

export function filterByBrand(query) {
    return {
        type: "products/filterByBrand", payload: query
    };
}