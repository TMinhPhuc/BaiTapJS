//Bài tập 1:
//Input: số ngày làm việc.
//Process:
//  + Kiểm tra ô nhập liệu có bị bỏ trống hoặc tồn tại ký tự không.
//  + Kiểm tra giá trị nhận vào đáp ứng đủ điều kiện có phải số nguyên dương hay không.
//  + Hiển thị thông báo nếu input không hợp lệ.
//  + Tính lương bằng số ngày làm việc nhân với lương 1 ngày.
//  + Hiển thị kết quả tiền lương.
//Output: Lương nhân viên.

document.getElementById("btnTinhLuong").onclick = function () {
    let soNgayLam = document.getElementById("soNgayLam").value;
    let alert = document.getElementById("kqBai1");
    if (soNgayLam == "") {
        alert.innerText = "Số ngày làm phải là một số nguyên dương";
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
    }
    else {
        soNgayLam = Number(soNgayLam);
        if (soNgayLam < 0 || !Number.isInteger(soNgayLam)) {
            alert.innerText = "Số ngày làm phải là một số nguyên dương";
            alert.classList.remove("alert-success");
            alert.classList.add("alert-danger");
        }
        else {
            soNgayLam = parseInt(soNgayLam);
            let luong;
            luong = (100000 * soNgayLam).toLocaleString();
            alert.innerText = `Tiền lương: ${luong} VND`;
            alert.classList.remove("alert-danger");
            alert.classList.add("alert-success");
        }
    }
    alert.classList.remove("d-none");
}

//Bài tập 2:
//Input: 5 giá trị số thực.
//Process:
//  + Kiểm tra các giá trị được nhập.
//  + Hiển thị thông báo lỗi nếu nhập liệu không đủ.
//  + Tính giá trị trung bình 5 số thực.
//  + In kết quả ra màn hình.
//Output: Giá trị trung bình của 5 số thực.

document.getElementById("btnTinhTrungBinh").onclick = function () {
    let alert = document.getElementById("kqBai2");
    let so1 = parseFloat(document.getElementById("so1").value);
    let so2 = parseFloat(document.getElementById("so2").value);
    let so3 = parseFloat(document.getElementById("so3").value);
    let so4 = parseFloat(document.getElementById("so4").value);
    let so5 = parseFloat(document.getElementById("so5").value);
    if (isNaN(so1) || isNaN(so2) || isNaN(so3) || isNaN(so4) || isNaN(so5)) {
        alert.innerText = "Input chưa được nhập đủ";
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
    }
    else {
        let tb = (so1 + so2 + so3 + so4 + so5) / 5;
        alert.innerText = `Giá trị trung bình: ${tb}`;
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
    }
    alert.classList.remove("d-none");
}

//Bài tập 3:
//Input: Giá trị USD.
//Process: 
//  + Kiểm tra giá trị nhập vào có phải số lớn hơn 0 hay không.
//  + Tính giá trị VND bằng cách lấy số USD nhân với 23.500.
//Output: Giá trị VND.

document.getElementById("btnQuyDoi").onclick = function () {
    let alert = document.getElementById("kqBai3");
    let soUSD = parseFloat(document.getElementById("soUSD").value);
    if ( soUSD < 0 || isNaN(soUSD) ) {
        alert.innerText = "Số USD phải là một số thực lớn hơn 0";
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
    }
    else {
        let soVND = (soUSD * 23500).toLocaleString();
        alert.innerText = `Giá trị trung bình: ${soVND} VND`;
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
    }
    alert.classList.remove("d-none");
}

//Bài tập 4:
//Input: Giá trị chiều dài, chiều rộng.
//Process: 
//  + Kiểm tra giá trị chiều dài, chiều rộng nhập vào có phải số lớn hơn 0 hay không.
//  + Tính giá trị chu vi bằng ( chiều dài + chiều rộng ) * 2.
//  + Tính giá trị diện tích bằng chiều dài * chiều rộng.
//Output: Chu vi, diện tích của hình chữ nhật.

document.getElementById("btnTinhHCN").onclick = function () {
    let alert = document.getElementById("kqBai4");
    let chieuDai = parseFloat(document.getElementById("chieuDai").value);
    let chieuRong = parseFloat(document.getElementById("chieuRong").value);
    if ( chieuDai < 0 || isNaN(chieuDai) || chieuRong < 0 || isNaN(chieuRong) ) {
        alert.innerText = "Chiều dài, chiều rộng phải là một số thực lớn hơn 0";
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
    }
    else {
        let chuVi = ( chieuDai + chieuRong ) * 2;
        let dienTich = chieuDai * chieuRong;
        alert.innerText = `Chu vi: ${chuVi}, Dien tich: ${dienTich}`;
        alert.classList.remove("alert-danger");
        alert.classList.add("alert-success");
    }
    alert.classList.remove("d-none");
}

//Bài tập 5:
//Input: Số nguyên dương 2 chữ số.
//Process: 
//  + Kiểm tra giá trị đầu vào xem có phải số nguyên dương 2 chữ số không.
//  + Tính chữ số hàng chục bằng input / 10.
//  + Tính chữ số hàng đơn vị bằng input % 10.
//  + Tính tổng số hàng chục, hàng đơn vị.
//Output: Tổng số hàng chục, hàng đơn vị.

document.getElementById("btnTinhTongKySo").onclick = function () {
    let soHaiChuSo = document.getElementById("soHaiChuSo").value;
    let alert = document.getElementById("kqBai5");
    if (soHaiChuSo == "") {
        alert.innerText = "Input phải là số nguyên dương 2 chữ số";
        alert.classList.remove("alert-success");
        alert.classList.add("alert-danger");
    }
    else {
        soHaiChuSo = Number(soHaiChuSo);
        if (soHaiChuSo < 9 || !Number.isInteger(soHaiChuSo) || soHaiChuSo >= 100) {
            alert.innerText = "Input phải là số nguyên dương 2 chữ số";
            alert.classList.remove("alert-success");
            alert.classList.add("alert-danger");
        }
        else {
            let chuc = parseInt(soHaiChuSo / 10);
            let donVi = soHaiChuSo % 10;
            let tong = chuc + donVi;
            alert.innerText = `Tổng là: ${tong}`;
            alert.classList.remove("alert-danger");
            alert.classList.add("alert-success");
        }
    }
    alert.classList.remove("d-none");
}
