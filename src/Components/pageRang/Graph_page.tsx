import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Graph_Page() {
  const navigates = useNavigate();


  function navigateToBackVote() {
    navigates("/vote");
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://i.pinimg.com/originals/a7/a5/e3/a7a5e3589be5662d93d4539284062c22.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "90vh",
        width: "100vw",
        padding: "auto",
      }}
    >
      <div style={{ display: "flex", marginRight: "150px" }}>
        <div style={{ marginTop: "0px" }}>
          <button className="button" onClick={navigateToBackVote}>
            Back
          </button>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <div style={{ display: "flex" }}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.50)",
              padding: "20px",
              borderRadius: "30px",
              marginRight: "20px", // เพิ่มระยะห่างด้านขวาของการ์ด
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  marginRight: "20px",
                  borderRadius: "50%",
                  display: "inline-block",
                }}
              >
                <img
                  src="https://i.pinimg.com/564x/ed/84/3b/ed843b02bf7de031107f058040386173.jpg"
                  style={{
                    width: "170px",
                    height: "170px", // Maintain aspect ratio
                    borderRadius: "50%", // Make it circular
                  }}
                />
              </div>
              <div
                style={{
                  textAlign: "left",
                  display: "inline-block",
                  verticalAlign: "top",
                }}
              >
                <div className="prompt-light">
                  <h1>Eevee Konami</h1>
                  <p>
                    Followers 120.10K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Following 57K &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
              </div>
            </div>
          </Card>
        </div>
      </div>
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
      </div>
    </div>
  );
}

export default Graph_Page;
