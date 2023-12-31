import React, { useState, useEffect } from "react";

function MarqueeComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your server
    fetch(
      "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?singleLine=Coffee%20Shop&maxLocations=10&outFields=Match_addr%2CPlace_addr%2CType&f=pjson"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.candidates) {
          setData(data.candidates);
        } else {
          console.error("Candidates data not found in response");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ marginTop: "5pc" }}>
      <marquee>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              color: "white",
              fontFamily: "poppins",
              fontWeight: "bolder",
              display: "inline-block",
              marginRight: "20px",
            }}
          >
            <div>{item.address}</div>
            <div>${item.score}</div>
          </div>
        ))}
      </marquee>
    </div>
  );
}

export default MarqueeComponent;
