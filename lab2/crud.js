// import readline from "readline/promises";
// import { stdin, stdout } from "process";
// import { readFile, writeFile } from "fs/promises";

// const FILE = "products.json";

// const getCart = async () => {
//   const data = await readFile("cart.json", "utf8");
//   return JSON.parse(data);
// };

// const saveCart = async (myCart) => {
//   await writeFile(FILE, JSON.stringify(myCart, nuull, 2));
// };

// const addToCart = async (product) => {
//   const myCart = await getCart();
//   const isFound = myCart.find((items) => items.id === product.id);
//   if (isFound) {
//     isFound.qty += product.qty;
//   } else {
//     myCart.push(product);
//   }
//   await saveCart(myCart);
//   console.log(`Product Added/Updated with id ${product.id} into cart`);
// };

// const main = async () => {
//   let choice;
//   const cin = readline.createInterface({ input: stdin, output: stdout });
//   do {
//     console.log("Welcome to Flipkart");
//     console.log("1.......... Show Cart");
//     console.log("2.......... Add Product");
//     console.log("3.......... Remove Product");
//     console.log("4.......... Update Quantity");
//     console.log("5.......... Exit");
//     choice = await cin.question("Enter your choice: ");
//     switch (choice) {
//       case 1:
//         console.log("Show products");
//         break;
//       case 2:
//         console.log("Product Added");
//         break;
//       case 3:
//         console.log("Remove Product");
//         break;
//       case 4:
//         console.log("Update Product Quantity");
//         break;
//       case 5:
//         console.log("See you Later");
//         break;
//       default:
//         console.log("Invalid choice");
//     }
//   } while (choice != 5);
//   cin.close();
// };

// main();
import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "products.json";

const getCart = async () => {
  const data = await readFile("cart.json", "utf8");
  return JSON.parse(data);
};

const saveCart = async (myCart) => {
  await writeFile(FILE, JSON.stringify(myCart, nuull, 2));
};

const addToCart = async (product) => {
  const myCart = await getCart();
  const isFound = myCart.find((items) => items.id === product.id);
  if (isFound) {
    isFound.qty += product.qty;
  } else {
    myCart.push(product);
  }
  await saveCart(myCart);
  console.log(`Product Added/Updated with id ${product.id} into cart`);
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });
  do {
    console.log("Welcome to Flipkart");
    console.log("1.......... Show Cart");
    console.log("2.......... Add Product");
    console.log("3.......... Remove Product");
    console.log("4.......... Update Quantity");
    console.log("5.......... Exit");
    choice = await cin.question("Enter your choice: ");
    switch (choice) {
      case 1:
        console.log("Show products");
        break;
      case 2:
        console.log("Product Added");
        break;
      case 3:
        console.log("Remove Product");
        break;
      case 4:
        console.log("Update Product Quantity");
        break;
      case 5:
        console.log("See you Later");
        break;
      default:
        console.log("Invalid choice");
    }
  } while (choice != 5);
  cin.close();
};

main();
