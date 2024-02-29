import { Card, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function EditImageing_Page() {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/editimage");
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
          <button className="button containerbt" onClick={navigateTo}>
            Back
          </button>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
            <div className="container">
              <TextField
                label="Eevee"
                type="Eevee"
                required
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              {" "}
              <br />
              <a className="button" href="#popup1">
                Edit
              </a>
            </div>
            <div id="popup1" className="overlay">
              <div className="popup">
                <h2>คุณทำการแก้ไขสำเร็จแล้ว</h2>
                <a className="close" href="#">
                  &times;
                </a>
                <div className="content">
                  &nbsp;&nbsp;
                  <img
                    src="https://thumb.ac-illust.com/25/252183b6cb8338c3f596ba058de7b6be_t.jpeg"
                    style={{
                      width: "50%", // ปรับขนาดรูปภาพให้ทั้งหมดแสดงผลในตัว div
                      height: "50%", // ปรับขนาดรูปภาพให้ทั้งหมดแสดงผลในตัว div
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="prompt-light" style={{ marginTop: "20px" }}></div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default EditImageing_Page;
