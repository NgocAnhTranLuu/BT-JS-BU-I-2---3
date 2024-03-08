/* B4: TÍNH DIỆN TÍCH VÀ CHU VI HCN
- Inputs: chiều dài(chDai), chiều rộng(chRong), diện tích(dienTich), chu vi(chuVi)
- Process:
    B1: Lấy data từ form
    B2: Công thức: dienTich = chDai * chRong
                    chuVi = (Number(chDai) + Number(chRong))*2
    B3: Hiển thị thông báo
- Outputs: tong luong(total)
*/
function login(){
    let chDai = document.getElementById("chDai").value;
    let chRong = document.getElementById("chRong").value;
    let dienTich = 0;
    let chuVi = 0;

    dienTich = chDai * chRong
    chuVi = (Number(chDai) + Number(chRong))*2

    document.getElementById("txtB4").innerHTML = "Diện tích: " + dienTich + "<br> Chu vi: " + chuVi;
}
document.getElementById("btnB4").onclick = login;