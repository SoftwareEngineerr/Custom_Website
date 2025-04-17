import React, { lazy, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SelectIndex } from '../../redux/actions/addsection/addsection';
import ProductListPage from '../components/ProductListPage';
import { UseItems } from './Hook/useItems';

const DynamicRender = lazy(()=> import('./components/dynamicRender'))

const Form = props => {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);
    const items = UseItems()
    const obj = useSelector((state)=>state.Section);

    // Handle drag start event
    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("draggedIndex", index);
    };

    // Handle drop event
    const handleDrop = (e, dropIndex) => {
        const draggedIndex = e.dataTransfer.getData("draggedIndex");
        
        // Create a copy of the items to avoid direct mutation
        const updatedItems = [...items];
        
        // Swap the items
        const [draggedItem] = updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(dropIndex, 0, draggedItem);

        // Dispatch the updated items to Redux store
        dispatch(SelectIndex(updatedItems));
    };

    useEffect(()=>{
        console.log(obj)
    },[obj])


    // Handle drag over event
    const handleDragOver = (e) => {
        e.preventDefault(); // Allow drop
    };

    // Handle item click event
    const handleItemClick = (index) => {
        setSelectedItem(index);
    };

    return (
        <div>
            
        {items != 'plp' && items != 'pdp' && items != '' ? 
            Array.isArray(items) &&
            items.map((item, index) => (
                <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDrop={(e) => handleDrop(e, index)}
                    onDragOver={handleDragOver}
                    onClick={() => handleItemClick(index)} // Select item on click
                    style={{
                        cursor: "move",
                        position: "relative",
                    }}
                >
                    <DynamicRender data={item} id={index} />
                    {selectedItem === index && (
                        <div
                            style={{
                                position: "absolute",
                                top: "-25px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                backgroundColor: "darkblue",
                                color: "white",
                                padding: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            {item.category}
                        </div>
                    )}
            </div> 
            )
        )
    
        :
        items == 'plp' ?  <>  <ProductListPage /> </>
        :
        items == 'pdp' ? items
        :
            null
        }
        </div>
    );
};

Form.propTypes = {};

export default memo(Form);
