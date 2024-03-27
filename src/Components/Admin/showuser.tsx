import {  Card } from "@mui/material";
// import { BiHome } from "react-icons/bi";
// import { BsChatHeartFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function Showuser_Page() {
  const navigate = useNavigate();

  function navigateTo() {
    navigate("/admin");
  }
  // function navigateTograph() {
  //   navigate("/graph");
  // }


  const images = [
    
    {
      src: "https://pbs.twimg.com/media/Ehr1WLUU0AA9X3A?format=jpg&name=large",
      alt: "ห่วย!!",
    },
    { src: "รูปภาพ2.jpg", alt: "รูปภาพที่ 2" },
    { src: "รูปภาพ3.jpg", alt: "รูปภาพที่ 3" },
    { src: "รูปภาพ2.jpg", alt: "รูปภาพที่ 4" },
    { src: "รูปภาพ2.jpg", alt: "รูปภาพที่ 5" },
    // เพิ่มรูปภาพตามต้องการ
  ];

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
        height: "94vh",
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
        <div style={{ display: "flex" }}></div>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 1.0)",
            padding: "20px",
            borderRadius: "30px",
            marginLeft: "120px", // ระยะห่างด้านซ้ายของการ์ดแรก
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "300px",
            height: "500px",
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
                //src={user.profile}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM5LZ4Qu6-IkXWf4AVnhd9xUoZs_gwxdZRBA46ctr0VQaSHkWqfrtjiZlbQ92CIvY66mI&usqp=CAU"
                style={{
                  width: "180px",
                  height: "180px", // Maintain aspect ratio
                  borderRadius: "50%", // Make it circular
                }}
              />
              <h1>Y</h1>
              <h3>Maikonk@gmail.com</h3>
            </div>
          </div>
        </Card>
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 1.0)",
            padding: "20px",
            borderRadius: "30px",
            marginLeft: "20px", // ระยะห่างด้านซ้ายของการ์ดที่สอง
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "900px",
            height: "500px",
            overflowX: "auto", // เพิ่มการเลื่อนในทิศทางแนวนอน
          }}
        >
          <div
            style={{
              display: "flex",
              marginLeft:"350px",
              gap: "20px",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                  <Card component={Link} to="/showgraph"
                    key={index}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 1.0)",
                      padding: "20px",
                      borderRadius: "30px",
                      width: "200px", // ขนาดของการ์ดย่อย
                      height: "200px",
                      overflow: "hidden",
                      
                    }}
                  >
                    <div>
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    </div>
                  </Card>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
export default Showuser_Page;
