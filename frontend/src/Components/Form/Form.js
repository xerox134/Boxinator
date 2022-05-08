import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SketchPicker } from "react-color";
import { postBoxes } from "../../Features/boxes";
import { useDispatch } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";

export default function Form() {
  const dispatch = useDispatch();
  const {register,formState: { errors },handleSubmit} = useForm();
  const [color, setColor] = useState("");
  const [show, setShow] = useState(false);

  const onSubmit = async (data) => {
    if (color === "") {
      alert("Please pick a color!");
    } else {
      data.color = `${color.r},${color.g},${color.b}`;

      const box = {
        name: data.name,
        country: data.country,
        weight: data.weight,
        box_color: data.color,
      };

      dispatch(postBoxes(box));
      alert("Box has been sent!");
    }
  };

  const validateColor = (hsl, rgb) => {
    if (hsl.h > 167 && hsl.h < 255) {
      alert("We do not accept the color blue or any of it shades!");
    } else {
      setColor(rgb);
    }
  };

  return (
    <div className="formComponent" >

      <div className="formContent" >
        <form  onSubmit={handleSubmit(onSubmit)}>
          <h1> Send box</h1>
          <div>
          <div >
            <label>
              <h3>Name:</h3>
            </label>

            <input
              
              type="text"
              pattern="^[A-Za-z]{3,16}$"
              placeholder="Enter reciver name"
              {...register("name", {
                required:
                  "Reciver should be 3-16 characters and shoudnt include any special characters or numbers",
              })}
            />

            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

          <div >
            <label >
              <h3>Weight:</h3>
            </label>
            <input
              name="weight"
              type="number"
            
              placeholder="Enter the weight in Kg"
              // pattern="^[1-9][0-9]{0,4}$"
              min="1"
              {...register("weight", {
                required:
                  "Weight should be positive number, and shouldnt include any special characters, (Max weight:99999kg)",
              })}
            />

            <ErrorMessage
              errors={errors}
              name="weight"
              render={({ message }) => <p>{message}</p>}
            />
          </div>

          <div >
         
              <label >
                <h3>Color:</h3>
              </label>
              <button type="button" onClick={() => setShow((prev) => !prev)}>
                Open color picker!
              </button>
            
            {show && (
              <SketchPicker
                color={color}
                onChange={(updatedColor) => {
                  validateColor(updatedColor.hsl, updatedColor.rgb);
                }}
              />
            )}
          </div>

          <div >
            <label ><h3>Country</h3></label>
            <select
              {...register("country", { required: "Please pick a country!" })}
            >
              <option value="Sweden">Sweden</option>
              <option value="China">China</option>
              <option value="Brazil">Brazil</option>
              <option value="Australia">Australia</option>
            </select>

            <ErrorMessage
              errors={errors}
              name="country"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          </div>
          <button  type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
