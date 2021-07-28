 function renderTableRow(label, value) {
    return `<tr>
    <td>${label}</td>
    <td>${value}</td>
</tr>`
}

let htmlForCarbs = renderTableRow("Carbs", "17g");
let htmlForProtein = renderTableRow("Protein", "19g");
let htmlForFat = renderTableRow("Fat", "5g");

const tbody = document.querySelector("#nutrition-table tbody");
tbody.insertAdjacentHTML("beforeend", htmlForCarbs);
tbody.insertAdjacentHTML("beforeend", htmlForProtein);
tbody.insertAdjacentHTML("beforeend", htmlForFat);
