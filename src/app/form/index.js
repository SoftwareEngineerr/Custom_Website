import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { UserInterFace } from '../../constant/Website';
import Header from '../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { SelectIndex } from '../../redux/actions/addsection/addsection';
import SlideShow from '../components/slideshow';
import Collection_List from '../components/collectionList';
import RichText from '../components/richtext';
import ImageWithText from '../components/imageWithText';
import Image_Banner from '../components/image_Banner';
import Contact from '../components/Contact';
import EmailSignup from '../components/EmailSignup';
import Multirow from '../components/Multirow';
import FeaturedCollection from '../components/FeaturedCollection';
import College from '../components/College';
import CustomAppMulticolumn from '../components/CustomAppMulticolumn';
import Collapible_content from '../components/Collapible_content';
import ProductListPage from '../components/ProductListPage';

const Form = props => {
    // Fetch state from Redux store
    const itemsFromRedux = useSelector((state) => state.Section);
    const PageChanger = useSelector((state) => state.PageChanger);
    const dispatch = useDispatch();

    // Initialize state using items from Redux store
    const [items, setItems] = useState(itemsFromRedux);
    const [selectedItem, setSelectedItem] = useState(null);

    // Handle drag start event
    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("draggedIndex", index);
    };
    useEffect(()=>{
        setItems([])
        console.log('1')
    },[PageChanger])

    useEffect(()=>{
      setItems(itemsFromRedux)
      console.log('2')
    },[itemsFromRedux])

    // Handle drop event
    const handleDrop = (e, dropIndex) => {
        const draggedIndex = e.dataTransfer.getData("draggedIndex");
        
        // Create a copy of the items to avoid direct mutation
        const updatedItems = [...items];
        
        // Swap the items
        const [draggedItem] = updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(dropIndex, 0, draggedItem);
        
        // Update state with new item order
        setItems(updatedItems);

        // Dispatch the updated items to Redux store
        dispatch(SelectIndex(updatedItems));
    };

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
            
            {items != 'plp' && items != 'pdp' && items != '' ? items.map((item, index) => (
                item.category === "header" && (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}
                        onClick={() => handleItemClick(index)} // Select item on click
                        style={{
                            backgroundColor: "skyblue",
                            textAlign: "center",
                            cursor: "move",
                            borderRadius: "5px",
                            position: "relative",
                        }}
                    >
                        <Header getid={index} />
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
                                Header
                            </div>
                        )}
                    </div>
                ) ||
                item.category === "slideshow" && (
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}
                        onClick={() => handleItemClick(index)} // Select item on click
                        style={{
                            margin: "10px",
                            padding: "20px",
                            backgroundColor: "skyblue",
                            textAlign: "center",
                            cursor: "move",
                            borderRadius: "5px",
                            position: "relative",
                        }}
                    >
                        <SlideShow />
                    </div>
                )||
                item.category === "Collection_List" && (
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
                        <Collection_List  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "Featured_collection" && (
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
                        <FeaturedCollection  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "RichText" && (
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
                        <RichText  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "Image_With_Text" && (
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
                        <ImageWithText  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "Image_Banner" && (
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
                        <Image_Banner  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "Contact" && (
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
                        <Contact  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "Email_signup" && (
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
                        <EmailSignup  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "College" && (
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
                        <College  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "Multirow" && (
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
                        <Multirow  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                ||
                item.category === "Multicolumn" && (
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
                        <CustomAppMulticolumn  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                ) ||
                item.category === "Collapible_content" && (
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
                        <Collapible_content  getid={index} />

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
                                Header
                            </div>
                        )}
                    </div>
                )
                

                

                
                

                

                
            ))
        :
        items == 'plp' ?
            <>
                <ProductListPage />
            </>
            :
            items == 'pdp' ?
            items
            :
            null
        }
        </div>
    );
};

Form.propTypes = {};

export default Form;
