/* B5: TÍNH TỔNG 2 KÝ SỐ
- Inputs: số có 2 ký số(so2Ky), tong luong(total)
- Process:
    B1: Lấy data từ form
    B2: Công thức:
        Số hàng chục: tens = Math.floor(so2Ky / 10)
        Số hàng đơn vị: units = so2Ky %10
        tổng total = tens + units
    B3: Hiển thị thông báo
- Outputs: tong luong(vnd)
*/
function login(){
    let so2Ky = document.getElementById("so2Ky").value;
    let tens = 0;
    let units = 0;
    let total = 0;

    tens = Math.floor(so2Ky / 10);
    units = so2Ky % 10;
    total = tens + units;

    document.getElementById("txtB5").innerHTML = total;
}
document.getElementById("btnB5").onclick = login;