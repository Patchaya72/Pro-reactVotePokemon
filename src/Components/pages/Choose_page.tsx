import { Button } from "@mui/material";
import { Link } from "react-router-dom";


function Choose_page() {



  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url('https://i.pinimg.com/originals/02/cd/a8/02cda82d8a2a5c23b338e5c643890e85.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          height: "94vh",
          width: "100vw",
          padding: "auto",
        }}
      >
        <Button
          className="prompt-light"
          component={Link}
          to="/vote"
          style={{
            backgroundColor: "#FFFF00",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "80px",
            fontSize: "25px",
            marginTop: "380px",
            cursor: "pointer",
            transition: "background-color 0.6s",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div>มาเริ่ม Batten กันเลย!!</div>
        </Button>
      </div>
    </>
  );
}

export default Choose_page;
