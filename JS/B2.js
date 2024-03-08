/* B2: TÍNH GIÁ TRỊ TRUNG BÌNH
- Inputs: so1, so2, so3, so4, so5, tong(total)
- Process:
    B1: Lấy data từ form
    B2: Công thức: total = (so1 + so2 + so3 + so4 + so5)/5
    B3: Hiển thị thông báo
- Outputs: tong luong(total)
*/
function login(){
    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    let so3 = document.getElementById("so3").value;
    let so4 = document.getElementById("so4").value;
    let so5 = document.getElementById("so5").value;
    let total = 0;

    total = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5))/5;

    document.getElementById("txtB2").innerHTML = total;
}
document.getElementById("btnB2").onclick = login;