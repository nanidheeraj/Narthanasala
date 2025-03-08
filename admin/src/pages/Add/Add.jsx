import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useEffect } from "react";
import {useNavigate } from "react-router-dom";

const Add = ({url}) => {
  const navigate=useNavigate();
  const {token,admin} = useContext(StoreContext);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Soups",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);

    const response = await axios.post(`${url}/api/food/add`, formData,{headers:{token}});
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Soups",
      });
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };
  useEffect(()=>{
    if(!admin && !token){
      toast.error("Please Login First");
       navigate("/");
    }
  },[])
  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} className="flex-col">
        
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              name="category"
              required
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Soups">Soups</option>
              <option value="Veg Starters">Veg Starters</option>
              <option value="Non-Veg Starters">Non-Veg Starters</option>
              <option value="Sea Food">Sea Food</option>
              <option value="Rice Items">Rice Items</option>
              <option value="Combos">Combos</option>
              <option value="Indian Veg Curries">Indian Veg Curries</option>
              <option value="Indian Non-Veg Curries">Indian Non-Veg Curries</option>
              <option value="Veg Biryani">Veg Biryani</option>
              <option value="Non-Veg Biryani">Non-Veg Biryani</option>
              <option value="Chinese">Chinese</option>
              <option value="Cooker Pulao">Cooker Pulao</option>
              <option value="Tandoori">Tandoori</option>
              <option value="Roties">Roties</option>

            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="₹20"
              required
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
