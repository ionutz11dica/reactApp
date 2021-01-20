export const filterProducts = (list, query) => {
    const lowerQuery = query.toLowerCase();
    return list.filter(item => (
        item.title.toLowerCase().indexOf(lowerQuery) !== -1 && item.description.toLowerCase().indexOf(lowerQuery) !== -1
        )
    )
}

export const filterProductsBySizes = (list, filteredList, sizes) => {
    const auxList = [];
    list.forEach(item => {
        item.sizesAvailable.forEach((size) => {
            if (sizes.includes(size.toString())) {
                auxList.push(item);
            }
        })
    })

    return auxList;
}

export const filterProductsByColours = (list, colours) => {
    return list.filter(item => {
        return colours.includes(item.color);
    })
}

export const filterProductsByBrands = (list, brands) => {
    return list.filter(item => {
        return brands.includes(item.brand);
    })
}