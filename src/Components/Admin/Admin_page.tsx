import { Card } from "@mui/material";

function Admin_page() {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUXFxcVFRUVGBcXFxUXFxcXFxcVFRcYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDjcZFRkrNy0tLSsrLS0tKy03NysrKzcrKy0rNysrKystKy0rKysrKysrNystKystKysrKysrN//AABEIAOAA4AMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAJBABAQEAAQIGAgMAAAAAAAAAAAER8AIhMUFhcYGRobESUcH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOys60dSKUq1AItgmAqQMAnULIloCLTACwUEwsWQAE0lAphIoJhFSQE/kuqgFPgAXAsTOdwUSJ1A0IAuiYQDy+zBaCZzuGKCYYsAIlKAqdJb6KCaRQEwFAiKlgKhSAaQWUEVCASBCgtRQEhqQgLKuISAqWLoCVJ7NRAJ4fBkPJcAohIBTO5Ic/YKJ0mAlnoqNUElWCAqaYYAYc8SAQXEgKuphKCKiwE+yeQUDFqAAWpvOwNYm87haCS9mhLQJCEIB0qysBaWGIBhgUFwT7UCRJCVQRUxaBqGmgYsTFgGglgELDVoItQucwCmrABJf8IAGEnhz+lkAtSGmgRMaASAoETFwlAkSUNAimJQVJSAAoDMVpnALCwMBYU6kwAqpQCE9i0ChFBFqEnNoKzvgu82nT5ARUXAQioCgmAumIAsIJOkFKnYoKlFgBKlAFsRQSQWQoJSi4CWGQ1bQSilBLSnyoJq1EBpD5/RsBUWEgIaSKAlCePmCglAJCLATApgFFqaAJz8LoKkqgJqpqgJimAYioBOpI1qYAaGgpE6gCLEUCJKQlAFSAqQiwEMCApUMAtXUwBftIQuAtTKqgzFqABIqaBDUvuSg0kDACQNA0WpQWJDQFtSEQGtTKYtgJE6VsUDEpKWAtiYuFAkKgBVCAhVsSgqRUoEVMJAOeawZlBrU0xcAsSqkBOmKAKYakoC6ighIRQQi1AIEiwEJV0oJhIb2MAww6SgIsUASKCC6zQaPv8ACRaCVU0gGqSJgLiKmASl3+jFBKVTQZrWlQCUqwAolgCTnMUwz0AkSigWC1M53ANAFTFxMAlNJPUwDSGroCKQFTEkXKAl53FBFNASCoBq2lNBNJTTQNAoH2tqW+yUFtRcWACSEgGnY0BOqLV6oAIoCBi6CSxdP5JvOwKgSgUXGb7A1allWABalSgurEhoKmi4CS87lUoGJhYAWLE0BRJDsBoUgP/Z')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "94vh",
        width: "100vw",
        padding: "auto",
      }}
    >
      
      <div style={{ display: "flex",marginRight: "290px" ,marginTop: "-295px",}}>
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
              src="https://i.pinimg.com/564x/76/75/0b/76750b7f544fd416ed2e07aed414ea7d.jpg"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "49px",
              }}
            />
            <div className="prompt-light" style={{ marginTop: "20px" }}>
              <h3>Umbreon</h3>
              </div>
          </Card>
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
              src="https://i.pinimg.com/564x/be/ef/96/beef96d6dd36a8a45221ea41a9d9e7f0.jpg"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "49px",
              }}
            />
            <div className="prompt-light" style={{ marginTop: "20px" }}>
              <h3>Umbreon</h3>
              </div>
          </Card>
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
              src="https://i.pinimg.com/564x/1b/fe/df/1bfedf18ae5cd1c74c0332ddd8872a02.jpg"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "49px",
              }}
            />
            <div className="prompt-light" style={{ marginTop: "20px" }}>
              <h3>Umbreon</h3>
              </div>
          </Card>
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
              src="https://i.pinimg.com/564x/11/7d/1f/117d1f47e76f93d8f001582c58bb6eb9.jpg"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "49px",
              }}
            />
            <div className="prompt-light" style={{ marginTop: "20px" }}>
              <h3>Umbreon</h3>
              </div>
          </Card>
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
              src="https://i.pinimg.com/564x/be/d3/d9/bed3d922e2a6e8635d43cb479ff8955e.jpg"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "49px",
              }}
            />
            <div className="prompt-light" style={{ marginTop: "20px" }}>
              <h3>Umbreon</h3>
              </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Admin_page;
