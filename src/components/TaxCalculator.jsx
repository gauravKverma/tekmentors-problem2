import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

const TaxCalculator = () => {
  const [data, setData] = useState([]);
  const [tax, setTax] = useState("");

  const getData = async () => {
    let res = await axios.get("https://tekmentors-problem2.onrender.com/invoices");
    setData(res.data);
  };

  const handleClick = (type, amount) => {
    if (type === 0) {
      setTax(amount * 0.05);
    }
    if (type === 1) {
      setTax(amount * 0.08);
    }
    if (type === 2) {
      setTax(amount * 0.12);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>TAL CALCULATOR</h1>
      <br />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td>S.No</td>
            <td>Amount</td>
            <td>Item_Type</td>
            <td>Calculate Tax</td>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.map((item) => (
            <tr key={item.sno}>
              <td>{item.sno}</td>
              <td>{item.amount}</td>
              <td>{item.item_type}</td>
              <td>
                <button
                  onClick={() => handleClick(item.item_type, item.amount)}
                >
                  Calculate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>
          Calculated Tax Value:{" "}
          <span>
            <input type="number" name="" id="taxValue" value={tax} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default TaxCalculator;
