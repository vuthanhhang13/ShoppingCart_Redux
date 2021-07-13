import React, { useState, useEffect } from "react";
import Header from "./header";
import Filter from "./filter";
import Fade from "react-reveal/Fade";
import store from './redux/store'
import {connect} from 'react-redux'
import {inCart, updateItem} from './redux/action'

function Home(props) {
  const {newcart}=props

  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState("products");
  const [size, setSize] = useState("");
  const [cost, setCost] = useState("");
  const [newProducts, setNewProducts] = useState([]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Áo nam đẹp vãi",
      cost: 46,
      image: "phon1.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 10,
      size: ["s", "xl", "m", "xxl", "l"],
    },
    {
      id: 2,
      name: "Đẹp dã man zợ",
      cost: 48,
      image: "phon4.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 20,
      size: ["s", "xl", "m", "xxl", "l"],
    },
    {
      id: 3,
      name: "Trời đất quỷ thần ơi",
      cost: 55,
      image: "phon5.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 15,
      size: ["s", "xl", "m", "xxl", "l", "sm"],
    },
    {
      id: 4,
      name: "Chỉ là phông thôiiii",
      cost: 72,
      image: "phon6.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 30,
      size: ["s", "xl", "m", "xxl", "l", "xxxl"],
    },
    {
      id: 5,
      name: "Sao cool vậyyy",
      cost: 30,
      image: "phon7.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 8,
      size: ["xl", "m", "xxl", "l"],
    },
    {
      id: 6,
      name: "WOW JENNIE ",
      cost: 300,
      image:
        "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2020/07/3-BLACKPINK-Jennie-Instagram-Update-MBC-Music-Core-4-July-2020.jpeg?w=1080&ssl=1",
      color: ["yellow", "red", "blue", "brown"],
      amount: 3,
      size: ["s", "xl", "m", "xxl", "l"],
    },
    {
      id: 7,
      name: "Thích quá rùi nà",
      cost: 40,
      image: "phong3.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 25,
      size: ["s", "xl", "m", "xxl", "l"],
    },
    {
      id: 8,
      name: "Siêu đỉnh luôn ý",
      cost: 90,
      image: "somi1.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 32,
      size: ["s", "xl", "xxl", "l"],
    },
    {
      id: 9,
      name: "Váy cứ bị lung linh",
      cost: 46,
      image: "vay1.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 18,
      size: ["s", "xl", "m", "xxl", "l"],
    },
    {
      id: 10,
      name: "Quả này thì hết nút",
      cost: 66,
      image: "somi7.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 10,
      size: ["s", "m", "xxl", "l"],
    },
    {
      id: 11,
      name: "Quả này thì hết nút",
      cost: 66,
      image: "phong1.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 10,
      size: ["s", "m", "xxl", "l"],
    },
    {
      id: 12,
      name: "Quả này thì hết nút",
      cost: 66,
      image: "phong6.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 10,
      size: ["s", "m", "xxl", "l"],
    },
    {
      id: 13,
      name: "Quả này thì hết nút",
      cost: 66,
      image: "phong8.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 10,
      size: ["s", "m", "xxl", "l"],
    },
    {
      id: 14,
      name: "Quả này thì hết nút",
      cost: 66,
      image: "vay5.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 10,
      size: ["m", "xxl", "l"],
    },
    {
      id: 15,
      name: "Quả này thì hết nút",
      cost: 66,
      image: "somi2.PNG",
      color: ["yellow", "red", "blue", "brown"],
      amount: 10,
      size: ["s", "m", "xxxl", "l"],
    },
  ])

  useEffect(() => {
    setNewProducts(products)
  }, [products])

  const addToCart = (product) => {
    //  console.log('chay vao add itemm',store.getState().data, newcart)
     const check=store.getState().data.findIndex(e=>e.id ===product.id)
     if(check>=0){updateItem(product)}
     else{inCart(product)}
  }

  const sizeFilter = (e) => {
    // setNewProducts([...products])

    if (e.target.value === "") {
      setSize(e.target.value)
    } else {
      setSize(e.target.value)
      setNewProducts([
        ...products.filter((item) => item.size.indexOf(e.target.value) >= 0),
      ])
    }
  }

  const sortCostFilter = (e) => {
    setCost(e.target.value)
    setNewProducts((s) => [
      ...s.sort((a, b) => {
        if (e.target.value === "") {
          return a.id - b.id
        } else if (e.target.value === "lowest") {
          return a.cost - b.cost
        } else {
          return b.cost - a.cost
        }
      }),
    ])
  }

  const renderProduct = () => (
    <>
      <h1 className="title">Products</h1>
      <Fade bottom cascade>
        <div className="app">
          {newProducts.map((product) => (
            <div className="item">
              <img src={product.image} alt={product.name} />
              <h4 className="name">{product.name}</h4>
              <div className="item-price">
                <h4 className="cost">${product.cost}</h4>
                <button
                  className="button-add"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </>
  )

  return (
    <>
      <Header
        status={status}
        cart={cart}
        setCart={setCart}
        setStatus={setStatus}
        history={props.history}
        name="hang"
      />

      <Filter
        sizeFilter={sizeFilter}
        sortCostFilter={sortCostFilter}
        size={size}
        cost={cost}
      />
      {status === "products" ? renderProduct() : ""}
    </>
  )
}
const mapStatetoProps=(state)=>{
  return{  
    newcart: state.data
  }
}

export default connect(mapStatetoProps)(Home)
