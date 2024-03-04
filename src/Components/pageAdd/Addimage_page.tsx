import { Card, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddImage_Page() {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/info");
  }
  function selectFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
      const preview = document.getElementById("preview");
      preview.src = reader.result;
    };

    reader.readAsDataURL(file);
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
        <div style={{ display: "flex" }}>
          <Card
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.50)",
              padding: "40px",
              borderRadius: "30px",
              marginLeft: "150px", // เพิ่มระยะห่างด้านขวาของการ์ด
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <img width="300px" id="preview" />
              <TextField
                type="file"
                margin="normal"
                id="file"
                required
                fullWidth
                autoFocus
                onChange={selectFile}
              />
            </div>
            <div className="container">
              <TextField
                label="ชื่อรูปภาพ"
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
                ADD
              </a>
            </div>
            <div id="popup1" className="overlay">
              <div className="popup">
                <h2>คุณทำการเพิ่มเรียบร้อยแล้ว</h2>
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

export default AddImage_Page;
