export function setColoursChecked(colors) {
    return {
        type: "common/sideBar/coloursChecked", payload: colors
    };
}

export function setSizesChecked(sizes) {
    return {
        type: "common/sideBar/sizesChecked", payload: sizes
    };
}

export function setBrandsChecked(brands) {
    return {
        type: "common/sideBar/brandsChecked", payload: brands
    };
}