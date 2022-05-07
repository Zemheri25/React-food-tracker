import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Random.css"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Random = ({ randomRestraunt,setRandom }) => {
    const handleBack = () => {
        setRandom(true)
    }


  return (
    <div className="Random">
            <Card sx={{ maxWidth: 250 }} className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={randomRestraunt.imgurl}
          alt={randomRestraunt.title}
        />
        <CardContent>
          <div className="cardcontent">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#04617D" }}
            >
              {randomRestraunt.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span style={{ fontWeight: "bolder" }}>Added Date : </span>
              {randomRestraunt.date}
            </Typography>
            <p style={{ fontSize: "13px" }}>
              {randomRestraunt.content.slice(0, 150)}...
            </p>
            <p style={{ fontSize: "13px" }}>
              {randomRestraunt.city} / {randomRestraunt.state}
            </p>
          </div>
          <div className="person">
            <AccountCircleIcon />
            <p style={{ fontWeight: "800", marginTop: "1rem" }}>
              {randomRestraunt.email}
            </p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>

    <button className="randombutton" onClick={handleBack}>Back</button>
    </div>
  );
};

export default Random;
