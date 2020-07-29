// ****** select items **********

const form = document.querySelector(".cuahangtaphoa-form");
const alert = document.querySelector(".alert");
const cuahangtaphoa = document.getElementById("cuahangtaphoa");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".cuahangtaphoa-container");
const list = document.querySelector(".cuahangtaphoa-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);

// clear list - kích vào nút clear để xóa tất cả item trong list
clearBtn.addEventListener("click", clearItems);

// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item
function addItem(e) {
  e.preventDefault();
  const value = cuahangtaphoa.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    const element = document.createElement("article"); // tạo mới một phần tử (có thể là thẻ div)
    let attr = document.createAttribute("data-id");    // tạo mới một thuộc tính
    attr.value = id;                                   // gán giá trị cho thuộc tính
    element.setAttributeNode(attr);                    // set thuộc tính cho một nút
    element.classList.add("cuahangtaphoa-item");       // add class
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // add event listeners to both buttons; - thêm sự kiện cho nút xóa và nút edit
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element); // thêm thẻ con element (article) vào div list item
    // display alert
    displayAlert("Đã thêm item vào danh sách", "success");
    // show container
    container.classList.add("show-container"); // hiển thị cái container chứa list danh sách ra

    // set local storage         
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();

  } else if (value !== "" && editFlag) {     // nếu giá trị item đã dc thay đổi xong 
    editElement.innerHTML = value;
    displayAlert("Đã thay đổi giá trị của item", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();

  } else {
    displayAlert("Hãy nhập vào giá trị", "danger");
  }
}

// display alert - hàm hiển thị cảnh báo
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items - xóa tất cả item
function clearItems() {
  const items = document.querySelectorAll(".cuahangtaphoa-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item - xóa một item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement; // e là một item, khi xóa thì xóa lun thẻ bố >> thẻ bố bao bọc nó, tương đương
                  // btn-delete => but-container => article; element = article
  const id = element.dataset.id;

  list.removeChild(element); // xóa element khỏi list

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id); // xóa item theo id khỏi local storaga
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement; // e là một item, khi sửa thì xóa lun thẻ bố >> thẻ bố bao bọc nó, tương đương
                // btn-delete => but-container => article; element = article

  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  cuahangtaphoa.value = editElement.innerHTML; // tên của item sẽ bằng giá trị người dùng chỉnh sửa trên thẻ input
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "edit";
}
// set backt to defaults
function setBackToDefault() {
  cuahangtaphoa.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** local storage **********

// add to local storage
function addToLocalStorage(id, value) {
  const cuahangtaphoa = { id, value };
  let items = getLocalStorage();
  items.push(cuahangtaphoa);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) { // chỉ lọc ra những item có id khác với id của item đã bị xóa
      return item;
    }
  });

  // ?????? chỗ này nên tìm hiểu cách xóa một item khỏi list được lưu trong localstorage ???????

  localStorage.setItem("list", JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));

  // ?????? Hàm map trong JS ??????
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("cuahangtaphoa-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}
