import React, { useState } from "react";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg"
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg"
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg"
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg"
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg"
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg"
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg"
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg"
    },
  ];
 const [current, setCurrent] = useState(0);
  const visible = 4;
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, departmentsArray.length - visible));

  return (
    <div className="container departments">
      <h2>Departments</h2>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", transition: "transform 0.3s ease", transform: "translateX(-" + (current * 25) + "%)" }}>
          {departmentsArray.map((depart, index) => (
            <div key={index} className="card" style={{ minWidth: "25%", padding: "0 10px" }}>
              <img src={depart.imageUrl} alt={depart.name} />
              <div className="depart-name">{depart.name}</div>
            </div>
          ))}
        </div>
        <button onClick={prev} disabled={current === 0}
          style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
            padding: "10px 15px", cursor: "pointer", background: "#9083d5",
            color: "#fff", border: "none", borderRadius: "50%", fontSize: "18px" }}>
          &lsaquo;
        </button>
        <button onClick={next} disabled={current >= departmentsArray.length - visible}
          style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
            padding: "10px 15px", cursor: "pointer", background: "#9083d5",
            color: "#fff", border: "none", borderRadius: "50%", fontSize: "18px" }}>
          &rsaquo;
        </button>
      </div>
    </div>
  );
};

export default Departments