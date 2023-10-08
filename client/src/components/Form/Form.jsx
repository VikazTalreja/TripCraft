import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import axios from "axios";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

import "./form.css";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const [info, setInfo] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("searching token");
    const token = localStorage.getItem("token");
    const finalToken = token.replace("Bearer ", "");
    const info = jwt_decode(finalToken);
    setInfo(info);
    // console.log(info);
  }, []);

  const formSubmitHandle = async (e) => {
    // console.log(e);
    const data = {
      city: e.city,
      date: e.date,
      duration: e.duration,
      uid: info.id,
    };
    console.log(data);

    const token = localStorage.getItem("token");

    setShow(true);

    axios
      .post("http://localhost:8080/trip/tripform", data, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      })
      .then((e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .post("http://localhost:8080/itinerary/generate", data)
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log(e);
      });

    setShow(false);

    window.location.href = "http://localhost:5173/dashboard";
  };

  return (
    <>
      {show ? (
        <LoadingScreen text="Please wait while we generate an itinerary for you" />
      ) : (
        <div></div>
      )}
      <div className="form-container">
        <h1>Lets plan your next adventure</h1>
        <form onSubmit={handleSubmit(formSubmitHandle)}>
          <input
            {...register("city")}
            placeholder="enter city"
            type="text"
            name="city"
            id="city"
          ></input>
          <input
            {...register("date")}
            placeholder="enter date"
            type="text"
            name="date"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          ></input>
          <input
            {...register("duration")}
            type="number"
            placeholder="enter number of days"
            name="duration"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
