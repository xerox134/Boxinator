import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PhotoshopPicker } from "react-color";
import axios from "axios";
import "../App.css";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const [color, setColor] = useState("#fff");
  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    if (data.h > 167 && data.h < 255) {
      alert("BLUE Colors are not accepted!");
    } else {
      data.color = `${color.r},${color.g},${color.b}`;

      const box = {
        name: data.name,
        country: data.country,
        weight: data.weight,
        box_color: data.color,
      };

      console.log("Data to be sent:", box);

      axios.post(`http://localhost:8080/rest/boxes1`, box).then((res) => {
        console.log(res.data);
      });
    }
  };

  const validateColor = (hsl, rgb) => {
    if (hsl.h > 167 && hsl.h < 255) {
      alert("BLUE Colors are not accepted!");
    } else {
      setColor(rgb);
    }
  };

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1> Send box</h1>

        <div className="form-inputs">
          <label className="form-label">Name</label>

          <input
            className="form-input"
            type="text"
            placeholder="Enter reciver name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Weight</label>
          <input
            className="form-input"
            type="number"
            placeholder="Enter the weight in Kg"
            min="0"
            {...register("weight", { required: true })}
          />
        </div>
        <div className="colorPicker">
          <div>
            <label className="form-label">Color</label>
            <button type="button" onClick={() => setShow((prev) => !prev)}>
              Open color picker!
            </button>
          </div>
          {show && (
            <PhotoshopPicker
              color={color}
              onChange={(updatedColor) => {
                validateColor(updatedColor.hsl, updatedColor.rgb);
              }}
            />
          )}
        </div>

        <div className="form-inputs">
          <label className="form-label">Country</label>
          <select {...register("country", { required: true })}>
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <button className="form-input-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
