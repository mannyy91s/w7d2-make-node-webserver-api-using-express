function usersData(){
    fetch('http://localhost:8080/api/v1/users')
    .then(response => response.json())
    .then((response) => {
        console.log(response)
    })
}
usersData()

function itemsData(){
    fetch('http://localhost:8080/api/v1/items')
    .then(response => response.json())
    .then((response) => {
        console.log(response)
    })
}
itemsData()

function ordersData(){
    fetch('http://localhost:8080/api/v1/orders')
    .then(response => response.json())
    .then((response) => {
        console.log(response)
    })
}
ordersData()

function addressesData(){
    fetch('http://localhost:8080/api/v1/addresses')
    .then(response => response.json())
    .then((response) => {
        console.log(response)
    })
}
addressesData()
