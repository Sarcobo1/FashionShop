import React, { useState } from "react";
import Dars1 from "./Dars_for1"
import Darss1 from "./Dars_1for"

const Dars = () => {
   

  return (   
        
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          name="fish"
          placeholder="fish"
          value={formData.fish}
          onChange={handleInputChange}
        />
        <select
          name="sniff"
          value={formData.sniff}
          onChange={handleInputChange}
        >
          <option value="">Sniff</option>
          <option value=" 1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input
          type="text"
          name="tel"
          placeholder="tel"
          value={formData.tel}
          onChange={handleInputChange}
        />
        <button onClick={handleAdd}>OK</button>
      </div>

      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Fish</th>
            <th>Sniff</th>
            <th>Tel</th>
            <th>Action</th>
          </tr>
        </thead>
       
      </table>  
      <Dars1/>
      <Dars1/>
    </div>
  );
};

export default Dars