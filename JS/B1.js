/* B1: TÍNH LƯƠNG NHÂN VIÊN
- Inputs: luong 1 ngay(luongNgay), so ngay(ngayLam), tong luong(total)
- Process:
    B1: Lấy data từ form
    B2: Công thức: total = luongNgay * ngayLam
    B3: Hiển thị thông báo
- Outputs: tong luong(total)
*/
function login(){
    let luongNgay = document.getElementById("luongNgay").value;
    let ngayLam = document.getElementById("ngayLam").value;
    let total = 0;

    total = luongNgay * ngayLam;

    document.getElementById("txtB1").innerHTML = total.toLocaleString() + " VNĐ";
}
document.getElementById("btnB1").onclick = login;