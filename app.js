
function dinhdang() {
    alert("*Tài khoản đăng kí không hợp lệ. \n-Tên người dùng chỉ gồm các kí tự:0-9,a-z,A-Z \n-Độ dài tên: 5-15 kí tự \n-Mật khẩu bao gồm các số: 0-9 \n-Độ dài mật khẩu: >6 kí tự \n-Số điện thoại chỉ bao gồm các số:0-9");
}
function kiemtradk() {

    var fullname = document.getElementById('fullname').value;
    var newusername=document.getElementById('newusername').value;
    var Email=document.getElementById('Email').value;
    var newpassword=document.getElementById('newpassword').value;
    const khoa = /^[0-9a-zA-Z]+$/;
    const khoa1= /^[0-9]+$/;
    if (khoa.test(fullname)&&(fullname.length>4&&fullname.length<16)&&(khoa1.test(newpassword))&&(khoa1.test(newusername)))
        {
            alert("Chúc mừng! Bạn đã đăng kí thành công.")
        }
    else 
        {
            dinhdang();
        }
      

}


function kiemtradn() {

    var username = document.getElementById('username').value;
    var password=document.getElementById('password').value;
    const khoa = /^[0-9a-zA-Z]+$/;
    const khoa1= /^[0-9]+$/;
    if (khoa.test(username)&&(username.length>4&&username.length<16)&&(khoa1.test(password)))
        {
            alert("Chúc mừng! Bạn đã đăng nhập thành công.")
        }
    else 
        {
            alert("Tài khoản hoặc mật khẩu không chính xác!")
        }
      

}
