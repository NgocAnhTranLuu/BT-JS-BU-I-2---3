/* B3: QUY ĐỔI TIỀN TỆ
- Inputs: USD(usd), Đổi tỉ giá VND(vnd)
- Process:
    B1: Lấy data từ form
    B2: Công thức: vnd = usd * 23500
    B3: Hiển thị thông báo
- Outputs: tong luong(vnd)
*/
function login(){
    let usd = document.getElementById("usd").value;
    let vnd = 0;

    vnd = usd * 23500;

    document.getElementById("txtB3").innerHTML = vnd.toLocaleString() + " VNĐ";
}
document.getElementById("btnB3").onclick = login;