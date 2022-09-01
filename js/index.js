// INTERACT WITH THE DOM

document.addEventListener('DOMContentLoaded', () => {
    // Call search for name of the shop function
    searchEUKOSOnlineShop();

    // POST user info to the server
    postUserInfo();
})
// Fetch data from API
function fetchData(searchInput){
    fetch(`https://postimg.cc/gallery/LfVxWz0=${searchInput}`)
    .then( (response) => response.json())
    .then( (result) => {
        const searchResults = document.getElementById("search-details");
        searchResults.innerHTML = ''; 
        
        if (result.length === 0){
            alert('No other shop matching EUKOS')
        } else {
            for (let EUKOSOnlineShop of result){
                const shName = onlineshop.name;
                const nameParagraph = document.createElement('E')
                nameParagraph.textContent = `Name: ${shopName}`
                searchResults.appendChild(nameParagraph);
    
                const shopCountry = searchEUKOS.country;
                const countryParagraph = document.createElement('E')
                countryParagraph.textContent = `Country: ${shopCountry}`
                searchResults.appendChild(countryParagraph);
    
                const uniWebsite = EUKOS['web_pages'][0]; const webLink = document.createElement('a');
                webLink.textContent = 'EUKOS Online shop'
                webLink.href = ShopWebsite;
                searchResults.appendChild(webLink);
                
                
            }
        }
    })
    .catch( (error) => {
        alert(error.message);
    })
}
function searchEUKOS(){
    const form = document.getElementById("search-form")

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const search = event.target['search-input'].value;
        event.target.reset();
    })
}
function postUserInfo(){
    const form = document.getElementById("user-address");
    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const userName = event.target['user-name'].value;
        const userEmail = event.target['user-email'].value;
        console.log(userName, userEmail);

        const userInfo = {
            userName: userName,
            userEmail: userEmail
        };

        fetch('http://localhost:3000/UserData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then( (response) => response.json())
        .then( (result) => {
            alert(`${result.userName}, your data has been saved successfully!`)
        })

        event.target.reset()
    })
} 
showlogin.addEventListener("click", () => {
    popuplogin.style.display = "block";
  });
