let inventoryStorageArray = [{
    item: "Apple",
    quantity: 45
},
{
    item: "Banana",
    quantity: 73
},
{
    item: "Orange",
    quantity: 34
}];

function displayItem(){
    const table = document.querySelector("#inventoryTable");
    table.innerHTML = `<tr><th>Item</th><th>Quantity</th></tr>`;

    inventoryStorageArray.forEach(item => {
        const newTdItem = document.createElement("td");
        const newTdQuantity = document.createElement("td");
        const newTr = document.createElement("tr");
        
        newTdItem.textContent = item.item;
        newTdQuantity.textContent = item.quantity;

        newTr.append(newTdItem);
        newTr.append(newTdQuantity);
        table.append(newTr);
    })
}

function addItem(){
    const addingNewItem = prompt("Enter item name: ");
    if(addingNewItem){
        const addingNewItemsQuantity = parseInt(prompt(`Enter the quantity for ${addingNewItem}: `));
        if(!isNaN(addingNewItemsQuantity)){
            inventoryStorageArray.push({
                item: addingNewItem,
                quantity: addingNewItemsQuantity
            })
            displayItem();
        }
        else{
            alert(`Invalid quantity!. Please enter a number`);
        }
    }
}

function removeItem(){
    const deleteItemRow = prompt("Enter a name of item: ");
    if(deleteItemRow){
        const index = inventoryStorageArray.findIndex(item => item.item.toLowerCase() === deleteItemRow.toLowerCase());
        if(index !== -1){
            inventoryStorageArray.splice(index, 1);
            displayItem();
        }
        else{
            alert(`Item ${deleteItemRow} not found.`);
        }
    }
}

displayItem();