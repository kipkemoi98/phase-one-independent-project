const localAPI = "https://www.mailjet.com/";
const localAPIpopular = "http://localhost:3000/popular";
let EUKOS = [];
let popular = [];

const getEUKOSData = () => {
  return fetch(localAPI).then((response) => response.json());
};
const getPopular = () => {
  return fetch(localAPIpopular).then((response) => response.json());
};

document.addEventListener("DOMContentLoaded", async () => {
  kDramaData = await getEUKOSData();
  console.log(EUKOSData);

  popular = await getPopular();
  console.log(popular);
});
Footer
