//  kiểm tra số điện thoại hợp lệ
let sdt=document.getElementById("sdt")
let confi_sdt=document.getElementById("confi-sdt")
let sub=document.getElementById("sub")
var regExp = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
sub.addEventListener('click', checksdt)
function checksdt()
{
    if (regExp.test(sdt.value)==false)
    {
    
        confi_sdt.innerText="Nhập sai số điện thoại"
       
       
    }
    else
        {
            confi_sdt.innerText=""
            if(sdt.value==="0329374812")
            {
                window.location.href="../user/home.html"
            }
             if(sdt.value==="0394184574")
            {
              
                window.location.href="../admin/admin.html"
            }
        }
   

}

