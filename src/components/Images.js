import React from "react";

export default function Images() {
  const image1 =
    "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
  const image2 =
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
  const image3 =
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80";
  const image4 =
    "https://images.unsplash.com/photo-1576020799627-aeac74d58064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2615&q=80";
  const image5 =
    "https://images.unsplash.com/photo-1525974160448-038dacadcc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80";
  const image6 =
    "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
  const image7 =
    "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
  const image8 =
    "https://images.unsplash.com/photo-1605883705077-8d3d3cebe78c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";
  return (
    <>
      <div className="image">
        <div className="card">
          <img src={image1} />
          <h2>Joshua plate</h2>
        </div>
        <div className="card">
          <img src={image2} />
          <h2>DB Plate</h2>
        </div>
        <div className="card">
          <img src={image3} />
          <h2>XYZ Plate</h2>
        </div>
        <div className="card">
          <img src={image4} />
          <h2>ALPHA Plate</h2>
        </div>
        <div className="card">
          <img src={image5} />
          <h2>Joshua2 Plate</h2>
        </div>
        <div className="card">
          <img src={image6} />
          <h2>JoshuaNew Plate</h2>
        </div>
        <div className="card">
          <img src={image7} />
          <h2>Joshua plate</h2>
        </div>
        <div className="card">
          <img src={image8} />
          <h2>MyJoshua Plate</h2>
        </div>
      </div>
    </>
  );
}
