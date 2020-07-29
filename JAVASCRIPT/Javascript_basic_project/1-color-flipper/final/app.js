const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const btn_2 = document.getElementById("btn_2");
const hinhVe = document.querySelector(".hinhVe");
const listHinh = ["hinhTron", "hinhVuong", "hinhChuNhat"];

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(); // giá trị từ 0 - 3
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  //  phương thức .textContent sẽ hiển thị nội dung trong thẻ html đó
});

btn_2.addEventListener("click", function(){
  var randomHinh = getHinhNgauNhien().toString();
  // xóa tất cả các hình đang có
  for(var i = 0; i < listHinh.length; i++)
  {
    hinhVe.classList.remove(listHinh[i]);
  }
  // vẽ hình
  hinhVe.classList.add(randomHinh);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); // colors.length = 4
}

function getHinhNgauNhien() // trả về một hình ngẫu nhiên
{
  var chiSoHinhNgauNhien = Math.floor(Math.random() * listHinh.length);
  var tenHinh = "";
  for(var i = 0; i < listHinh.length; i++)
  {
    if(i == chiSoHinhNgauNhien)
    {
      tenHinh = listHinh[i];
    }
  }
  return tenHinh;
}


// Hàm Math.floor: Trả về số integer lớn nhất nhỏ hơn hoặc bằng một số.
//var value = Math.floor(10.3); // 10
//var value = Math.floor(30.9); // 30
//var value = Math.floor(-2.9); // -3
//var value = Math.floor(-2.2); // -3

// Hàm Math.random(): tạo một số ngẫu nhiên từ 0 tới 1

