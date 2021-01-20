import React, { useCallback } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaPaintBrush, FaSquare, FaTags, FaTshirt } from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setColoursChecked, setBrandsChecked, setSizesChecked } from '../common/actions';
import { filterByBrand, filterByColour, filterBySize } from '../products/actions';

const selectSideBar = (state) => {
    return state.common.sidebar;
  }

const SideBar = () => {
    const dispatch = useDispatch();
    const {sizes, colours, brands, sizesChecked, brandsChecked, coloursChecked} =  useSelector((state) => selectSideBar(state));

    const handleColorChange = useCallback((e) => {
        const payload = {
            name: e.target.name,
            checked: e.target.checked
        };
        dispatch(setColoursChecked(payload));

        if(e.target.checked) {
            dispatch(filterByColour([...coloursChecked, e.target.name]));
        } else {
            dispatch(filterByColour([...coloursChecked.filter(item => item !== e.target.name)]));
        }
    }, [coloursChecked, dispatch])

    const handleSizeChange = useCallback((e) => {
        const payload = {
            name: e.target.name,
            checked: e.target.checked
        };
        dispatch(setSizesChecked(payload));

        if(e.target.checked) {
            dispatch(filterBySize([...sizesChecked, e.target.name]));
        } else {
            dispatch(filterBySize([...sizesChecked.filter(item => item !== e.target.name)]));
        }
    }, [dispatch, sizesChecked])

    const handleBrandChange = useCallback((e) => {
        const payload = {
            name: e.target.name,
            checked: e.target.checked
        };
        dispatch(setBrandsChecked(payload));

        if(e.target.checked) {
            dispatch(filterByBrand([...brandsChecked, e.target.name]));
        } else {
            dispatch(filterByBrand([...brandsChecked.filter(item => item !== e.target.name)]));
        }
    }, [brandsChecked, dispatch])
    
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <SubMenu open title="SIZE" icon={<FaTags />}>
            <div className="mb-3">
                <Form>
                    {
                        Object.keys(sizes).map((size, index) => (
                            <Form.Check 
                                type='checkbox'
                                name={size}
                                className={`sidebar-checkboxes`}
                                label={`${size}`}
                                key={`check-${index}`}
                                checked={sizes[size]}
                                onChange={(e) => handleSizeChange(e)}
                            />
                        ))
                    }
                </Form>
            </div>
        </SubMenu>
        <SubMenu title="BRAND" icon={<FaTshirt />}>
            <div className="mb-3">
                <Form>
                    {
                        Object.keys(brands).map((brand, index) => (
                            <Form.Check
                                type='checkbox'
                                name={brand}
                                className={`sidebar-checkboxes`}
                                label={`${brand}`}
                                key={`check-${index}`}
                                checked={brands[brand]}
                                onChange={(e) => handleBrandChange(e)}
                            />
                        ))
                    }
                </Form>
            </div>
        </SubMenu>
        <SubMenu title="COLOURS" icon={<FaPaintBrush />}>
            <div className="mb-3">
                <Form>
                    {
                        Object.keys(colours).map((color, index) => (
                            <div style={{display: 'flex'}} key={`check-${index}`}>
                                <Form.Check
                                    type='checkbox'
                                    name={color}
                                    className={`sidebar-checkboxes`}
                                    label={`${color}`}
                                    checked={colours[color]}
                                    onChange={(e) => handleColorChange(e)}
                                />
                                <span style={{marginLeft: '5px', marginTop: '-1px'}}><FaSquare color={`${color}`}/></span>
                            </div>
                        ))
                    }
                </Form>
            </div>
        </SubMenu>
        <MenuItem>
        </MenuItem>
      </Menu>
    </ProSidebar>
  )
}

export default SideBar
