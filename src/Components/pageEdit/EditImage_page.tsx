import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EditImage_Page() {
  const navigate = useNavigate();

  function navigateProfile() {
    navigate("/info");
  }
  function navigateEditImages() {
    navigate("/editimageing");
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
        &nbsp; &nbsp;
        <div style={{ marginTop: "0px" }}>
          <button className="button containerbt" onClick={navigateProfile}>
            Back
          </button>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        <div style={{ display: "flex" }}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.50)",
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
              src="https://i.pinimg.com/originals/6b/50/52/6b505222d87d67996a4759aae567e7a8.gif"
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
              <button className="button" onClick={navigateEditImages}>
                Edit
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="button">Delete</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EditImage_Page;
