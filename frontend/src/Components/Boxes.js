import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { getBoxes, getWeight, getSum } from "../Features/boxes";

export default function Boxes() {
  const boxes = useSelector((state) => state.boxes.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoxes());
    dispatch(getWeight());
    dispatch(getSum());
  }, [dispatch]);

  return (
    <div>
      <h1>BoxList</h1>
      <h1>{boxes.status}</h1>
      <table className="sub-container">
        <tbody>
          <tr>
            <th>Reciver</th>
            <th>Weight</th>
            <th>Color</th>
            <th>Country</th>
            <th>ShippingCost</th>
          </tr>
          {boxes.box.map((box) => (
            <tr key={box.id}>
              <td>{box.name} </td>
              <td>{box.weight} </td>
              <td
                style={{ backgroundColor: "rgb(" + box.box_color + ")" }}
              ></td>
              <td>{box.country} </td>
              <td>{box.shipping_cost} </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h1>Totals:</h1>
      <h3>
        Total Weight: {boxes.totalWeight}Kg | Total Cost:{" "}
        {Math.round(boxes.totalShipping)}Kr
      </h3>
    </div>
  );
}
