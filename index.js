const PORT = 8000;
const express = require("express");
const clientRosRest = require("./config/router.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Welcome to my miksu web!");
});
app.get("/dhcp", (req, res) => {
  clientRosRest
    .print("ip/dhcp-server/lease")
    .then((resp) => {
      const restdata = resp.data;
      res.json(restdata);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});
app.get("/address-list", (req, res) => {
  clientRosRest
    .print("/ip/firewall/address-list")
    .then((resp) => {
      const restdata = resp.data;
      res.json(restdata);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});
app.get("/address-list/:id", (req, res) => {
  clientRosRest
    .print("/ip/firewall/address-list/" + req.params.id)
    .then((resp) => {
      const restdata = resp.data;
      res.json(restdata);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});
app.post("/address-list", (req, res) => {
  clientRosRest.add("/ip/firewall/address-list", req.body).catch((err) => {
    console.log("error:", err);
  });
  res.status(201).json({ msg: "Address added !" });
});

app.patch("/address-list/:id", (req, res) => {
  clientRosRest
    .set("/ip/firewall/address-list/" + req.params.id, req.body)
    .catch((err) => {
      console.log("error:", err);
    });
  res.status(200).json({ msg: "Address Updated !" });
});

app.delete("/address-list/:id", (req, res) => {
  clientRosRest
    .remove("/ip/firewall/address-list/" + req.params.id)
    .catch((err) => {
      console.log("error:", err);
    });
  res.status(200).json({ msg: "Address Deleted !" });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
