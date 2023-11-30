const shoppingCart = [
     {name: "apple", quantity: 2, price: 0.5},
     {name: "banana", quantity: 1, price: 0.75},
     {name: "orange", quantity: 3, price: 1},
     {name: "mango", quantity:4,price:5},
     {name:"carrot",quantity:5,price:7},
]


const shopCart = shoppingCart.filter( (shcart)=>{
    return shcart.quantity > 4;
})

console.log("shopCart",shopCart);
const employees = [
    { id: 1, name: 'John', department: 'HR', salary: 50000 },
    { id: 2, name: 'Jane', department: 'Engineering', salary: 60000 },
    { id: 3, name: 'Bob', department: 'Finance', salary: 55000 },
    { id: 4, name: 'Alice', department: 'Engineering', salary: 70000 },
    { id: 5, name: 'Charlie', department: 'HR', salary: 45000 },
    { id: 6, name: 'David', department: 'Finance', salary: 60000 },
    { id: 7, name: 'Eva', department: 'Engineering', salary: 75000 },
    { id: 8, name: 'Frank', department: 'HR', salary: 8000 },
    { id: 9, name: 'Grace', department: 'Engineering', salary: 62000 },
    { id:10, name: 'Harryr', department: 'Finance', salary: 58000 },
    { id:11, name: 'Josasahn', department: 'HR', salary: 50000 },
    { id:12, name: 'Jasasane', department: 'Engineering', salary: 60000 },
    { id:13, name: 'Bosasab', department: 'Finance', salary: 55000 },
    { id:14, name: 'Alsasaice', department: 'Engineering', salary: 70000 },
    { id:15, name: 'Chsasaarlie', department: 'HR', salary: 45000 },
    { id:16, name: 'Dasasavid', department: 'Finance', salary: 60000 },
    { id:17, name: 'Evsasaa', department: 'Engineering', salary: 75000 },
    { id:18, name: 'Frsasaank', department: 'HR', salary: 48000 },
    { id:19, name: 'Grsasaace', department: 'Engineering', salary: 62000 },
    { id:20, name: 'Hasasarry', department: 'Finance', salary: 58000 },
  ];
  

  const highSalary = employees.filter( (sal)=>{
    return sal < 40000;

  })
  console.log(highSalary)
  const myNumber = [1,2,3,4,5,6,7,8,9,10]


const mynum = myNumber.map( (num)=>{
    return num * 10
    myNumber.filter((num) => {
        return num > 50
    })
})

console.log(mynum)

const shopCart = [
    {
      Itemname: "apple",
      weight: "5kg",
      price: 5,
    },
    {
      Itemname: "banana",
      weight: "5kg",
      price: 440,
    },
    {
      Itemname: "carrot",
      weight: "5kg",
      price: 4540,
    },
  ];
  
  const total = 
  shopCart.filter((item) => {
      return item.price >= 40;
    });
  shopCart.reduce((acc, item) => {
    return acc + item.price;
  
  }, 0);
  
  
  console.log(total);
  
  // Calculate Total Price:
  // Calculate the total price of all items in the shopping cart. ✅
  
  // Filter by Price:
  // Find items in the shopping cart that have a price greater than $30.
  
  // Calculate Total Weight:
  // Calculate the total weight of all items in the shopping cart.
  
  // Filter by Weight:
  
  // Find items in the shopping cart that weigh more than 3kg.
  // Map to Item Names:
  
  // Create an array containing only the names of the items in the shopping cart.
  // Modify Prices:
  
  // Increase the price of each item by 10%.
  // Filter by Name Length:
  
  // Find items in the shopping cart whose names have more than 5 characters.
  // Filter and Map:
  
  // Create an array of objects containing only the names and weights of items with a price greater than $35.
  