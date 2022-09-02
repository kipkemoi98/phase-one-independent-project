document.addEventListener('DOMContentLoaded', () => {

    searchEUKOSOnlineShop();


    postUserInfo();
})

function fetchData(searchInput) {
    fetch(`https://seller.flipkart.com/api-docs/FMSAPI.html${searchInput}`)
        .then((response) => response.json())
        .then((result) => {
            const searchResults = document.getElementById("search-details");
            searchResults.innerHTML = '';
        })
        .catch((error) => {
            alert(error.message);
        })
}
const search = () => {
    const searchbox = document.getElementById("search-item").values.toUpperCase();
    conststoreitems = document.getElementById("products")
    const product = document.querySelectorAll("product")
    const pname = document.getElementsByTagName("h2")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];

        if (macth) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i.style.display = ""];
            } else {
                product[i].style.display = "none";
            }
        }
    }
}

function searchEUKOS() {
    const form = document.getElementById("search-form")

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const search = event.target['search-input'].value;
        event.target.reset();
    })
}
function postUserInfo() {
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
        const username = document.querySelector("#useremail");
        const password = document.querySelector("password");
        const submit = document.querySelector("submit")

        submit.addEventListener("click", (event))=>{
            event.preventDefault();
        }

        fetch('http://localhost:3000/UserData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then((response) => response.json())
            .then((result) => {
                alert(`${result.userName}, your data has been saved successfully!`)
            })

        event.target.reset()
    })
}
showlogin.addEventListener("click", () => {
    popuplogin.style.display = "block";
});
