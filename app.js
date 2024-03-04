let inventoryStorageArray = [{
    item: "Apple",
    quantity: 45,
    price: 7.99,
    expiry: "19-09-2024"
},
{
    item: "Banana",
    quantity: 73,
    price: 2.99,
    expiry: "03-05-2024"
},
{
    item: "Orange",
    quantity: 34,
    price: 4.99,
    expiry: "24-07-2024"
}];

function displayItem(){
    const table = document.querySelector("#inventoryTable");
    table.innerHTML = `<tr><th>Item</th><th>Quantity</th><th>Price</th><th>Expiry</th><th>Action</th></tr>`;

    inventoryStorageArray.forEach(item => {
        const newTdItem = document.createElement("td");
        const newTdQuantity = document.createElement("td");
        const newTdPrice = document.createElement("td");
        const newTdExpiry = document.createElement("td");
        const newTdBtn = document.createElement("td");
        const newTr = document.createElement("tr");

        const updateBtn = document.createElement("button");
        const removeBtn = document.createElement("button");
        
        newTdItem.textContent = item.item;
        newTdQuantity.textContent = item.quantity;
        newTdPrice.textContent = item.price.toFixed(2);
        newTdExpiry.textContent = item.expiry;

        updateBtn.textContent = "Update Item";
        removeBtn.textContent = "Remove Item";
        updateBtn.classList = "button";
        removeBtn.classList = "button";

        updateBtn.onclick = function() { updateItem(item.item); };
        removeBtn.onclick = function() { removeItem(item.item); };

        newTdBtn.append(updateBtn);
        newTdBtn.append(removeBtn);

        newTr.append(newTdItem);
        newTr.append(newTdQuantity);
        newTr.append(newTdPrice);
        newTr.append(newTdExpiry);
        newTr.append(newTdBtn);
        table.append(newTr);
    })
}

function addItem(){
    const addingNewItem = prompt("Enter item name: ");

    if(addingNewItem){
        const addingNewItemsQuantity = parseInt(prompt(`Enter the quantity for ${addingNewItem}: `));
        const addingNewItemsPrice = parseFloat(prompt(`Enter the price for ${addingNewItem}: `));
        const addingNewItemsExpiry = prompt(`Enter expiry date in DD/MM/YYYY format for ${addingNewItem}: `);

        if(!isNaN(addingNewItemsQuantity) && !isNaN(addingNewItemsPrice) && addingNewItemsExpiry){
            inventoryStorageArray.push({
                item: addingNewItem,
                quantity: addingNewItemsQuantity,
                price: addingNewItemsPrice,
                expiry: addingNewItemsExpiry
            })
            displayItem();
        }
        else{
            alert("Invalid input!. Please enter valid values");
        }
    }
}

function updateItem(item){
    const itemIndex = inventoryStorageArray.findIndex(x => x.item === item);
    const updatingItemsQuantity = parseInt(prompt(`Enter new quantity for ${item}:`));
    const updatingItemsPrice = parseFloat(prompt(`Enter new price for ${item}: `));
    const updatingItemsExpiry = prompt(`Enter expiry date in DD/MM/YYYY format for ${item}: `);

    if(!isNaN(updatingItemsQuantity) && !isNaN(updatingItemsPrice) && updatingItemsExpiry){
        inventoryStorageArray[itemIndex].quantity = updatingItemsQuantity;
        inventoryStorageArray[itemIndex].price = updatingItemsPrice;
        inventoryStorageArray[itemIndex].expiry = updatingItemsExpiry;
        displayItem();
    }
    else{
        alert("Invalid input!. Please enter valid values");
    }
}

function removeItem(item){
    const confirmRemove = confirm(`Are you sure you want to remove "${item}" from inventory?`);
    if(confirmRemove){
        const indexOfItem = inventoryStorageArray.findIndex(x => x.item === item);
        inventoryStorageArray.splice(indexOfItem, 1);
        displayItem();
    }
}

displayItem();