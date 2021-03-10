import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID knlsBDrIoPGusJVWPdH2Kyp-LTl3uRiVwWxrz7KWqJ0",
  },
});
