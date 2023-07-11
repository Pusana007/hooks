import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(150);
  const [product2, setProduct2] = useState(300);
  const [product3, setProduct3] = useState(800);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {TotalPrice}</h3>
      </div>
      <div>
        <img src="case.png" alt="case" width="10%" />
        <br />
        เคสโทรศัพท์ ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(TotalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(TotalPrice - product1);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <br />
        <img src="shirt.png" alt="shirt" width="5%" />
        <br />
        เสื้อเชิ้ต ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(TotalPrice + product2);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(TotalPrice - product2);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <br />
        <img src="12buckle.jpg" alt="shoes" width="10%" />
        <br />
        รองเท้า ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(TotalPrice + product3);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(TotalPrice - product3);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
    </div>
  );
}

export default App;
