import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Vote_page() {
  const navigate = useNavigate();
  const navigates = useNavigate();

  function navigateTo() {
    navigate("/vote2");
  }
  function navigateToChoose() {
    navigates("/choose");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://i.pinimg.com/originals/9d/67/95/9d679563efe7ce2f95e5e3479dabcb19.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "90vh",
        width: "100vw",
        padding: "auto",
      }}
    >
      
      <div style={{ display: "flex",marginRight: "150px" }}>
      &nbsp; &nbsp; 
      <div style={{ marginTop: "0px"  }}>
              <button className="button" onClick={navigateToChoose}>Back</button>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <div style={{ display: "flex" }}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1.0)",
              padding: "40px",
              borderRadius: "30px",
              marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://i.pinimg.com/originals/36/5c/fe/365cfed7182dfecb8447c1beeae870ef.gif"
              style={{
                width: "400px",
                height: "auto",
                borderRadius: "15px",
              }}
            />
            <div className="prompt-light" style={{ marginTop: "20px" }}>
              <h3>Eevee</h3>
              <h3>120 โหวต</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <button className="button" onClick={navigateTo}>Like</button>
            </div>
          </Card>

          <div
            style={{ color: "black", display: "flex", alignItems: "center" }}
          >
            <h2 style={{ margin: "0" }}>VS &nbsp; &nbsp; </h2>
          </div>

          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1.0)",
              padding: "40px",
              borderRadius: "30px",
              marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              src="https://i.pinimg.com/originals/5a/5c/9c/5a5c9c77c20884ad91a3a02c1707c70a.gif"
              style={{
                width: "400px",
                height: "auto",
                borderRadius: "15px",
              }}
            />
            <div className="prompt-light" style={{ marginTop: "20px" }}>
              <h3>Umbreon</h3>
              <h3>120 โหวต</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <button className="button" onClick={navigateTo}>Like</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Vote_page;
