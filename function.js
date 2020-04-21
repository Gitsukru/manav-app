dataObj
    .filter(items => items.itemType.includes("Meyve"))
    .map(meyveler => {
        meyveler.products.map(product => {
            fruitTemplate += `<div class="div"><button class="fruit-item product-item btn" data-name="${product.name}"  data-price="${product.price}">
           
              <img src="${product.icon}" width="30" height="30" alt="Apple"/>
              <span class="nameProduct">${product.name}</span>
           
            <strong id="itemPrice">${product.price} TL</strong>
        </button></div>`;
        })
    });

dataObj
    .filter(items => items.itemType.includes("Sebze"))
    .map(sebzeler => {
        sebzeler.products.map(product => {
            vegetableTemplate += `<div class="div"><button class="fruit-item product-item btn" data-name="${product.name}" data-price="${product.price}">
            
              <img src="${product.icon}" width="30" height="30" alt="Apple"/>
              <span class="nameProduct">${product.name}</span>
           
            <strong id="itemPrice">${product.price} TL</strong>
        </button></div>`;
        })
    });

vegetableBox.innerHTML = vegetableTemplate;
fruitBox.innerHTML = fruitTemplate;

function changeToCart(name, price, removeName) {
    if (removeName == 0) {
        let newObj = {
            name,
            price,
            quantity: 1
        };
        if (selectedData.filter(item => item.name === name).length == 0) {
            selectedData.push(newObj);
        } else {
            selectedData.filter(item => item.name === newObj.name)[0].quantity += 1;
            selectedData.filter(item => item.name === newObj.name)[0].price += price;
        };

    } else {
        selectedData.splice(selectedData.findIndex(item => item.name === removeName), 1);
    }

    selectedData.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });

    let cartTemplate = "";
    selectedData.map(item => {
        cartTemplate += `<li class="list-item">
        <button class="removeArticle" onclick="changeToCart('','','${item.name}')">❌</button>
          <div class="nameProduct">${item.name}</div>
          <div class="nameProduct">
            <span id="labelquantity">Kg</span>
            <span>${item.quantity}</span>
          </div>
          <div>
            <input type="date" id="shoppingDate">
          </div>
          <div id="itemPrice">${item.price} TL</div>
        </li>`;
    });

    shoppingListContainer.innerHTML = cartTemplate;

    let totalAmount = selectedData.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price
    }, 0);

    totalAmountElement.innerHTML = totalAmount;

}

let itemSelector = document.querySelectorAll(".product-item");

for (let i = 0; i < itemSelector.length; i++) {
    itemSelector[i].addEventListener("click", function () {
        let productName = itemSelector[i].dataset.name;
        let productPrice = itemSelector[i].dataset.price;
        changeToCart(productName, parseInt(productPrice), 0);
    });
}