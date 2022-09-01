// Thêm sửa xóa Sản phẩm

var sp=[];
function themsp(){
    var stt_sp = 0;
    var name_sp = document.getElementById('name_sp').value; 
        var images_sp = document.getElementById('images_sp').value; 
        var numbers_sp = document.getElementById('numbers_sp').value; 
        var price_sp = document.getElementById('price_sp').value; 
   
    
    
    var item ={
        stt_sp : stt_sp,
        name_sp : name_sp,
        images_sp : images_sp,
        numbers_sp : numbers_sp,
        price_sp : price_sp
    };

    if(name_sp ==''){
        document.getElementById('name_sp').style.borderColor = 'red';
    } else{
        document.getElementById('name_sp').style.borderColor = 'black';
    }
    if(numbers_sp ==''){
        document.getElementById('numbers_sp').style.borderColor = 'red';
    } else{
        document.getElementById('numbers_sp').style.borderColor = 'black';
    }
    if(price_sp ==''){
        document.getElementById('price_sp').style.borderColor = 'red';
    } else{
        document.getElementById('price_sp').style.borderColor = 'black';
    }
    if (price_sp !='' && numbers_sp !='' && name_sp !=''){
        this.sp.push(item);
    }
    
    viewsp();
}

 function viewsp(){
    var list_sp = this.sp;
    var html_sp='<table class="table table-dark table-striped"><thead><tr><th>STT</th><th scope="col">Tên sản phẩm</th><th scope="col">Ảnh sản phẩm</th><th scope="col">Số lượng</th><th scope="col">Giá sản phẩm</th><th scope="col">Sửa/Xóa</th></tr></thead><tbody>';
    
    for (let i=0;i<list_sp.length; i++){
        list_sp[i].stt_sp = i+1;
        html_sp+='<tr><th scope="col">'+(i+1)+'</th>'
        html_sp+="<td>"+list_sp[i].name_sp+"</td>";
        html_sp+="<td><img src='"+list_sp[i].images_sp+"'></td>";
        html_sp+="<td>"+list_sp[i].numbers_sp+"</td>";
        html_sp+="<td>"+list_sp[i].price_sp+"</td>";
        html_sp+="<td><button class='btn' onclick='suasp_form("+list_sp[i].stt_sp+")'>Sửa</button><button class='btn' onclick='xoasp("+list_sp[i].stt_sp+")'>Xóa</button></td>";
        html_sp+="</tr>";
   } 
   
   html_sp+='</tbody></table>';
   document.getElementById('list_sp').innerHTML=html_sp;
 }

function suasp_form(stt){
    document.getElementById('form-edit-sp').style.display = 'block';
    var html='';
    var list_sp = this.sp;
    
    for (let i=0;i<list_sp.length; i++){
        if(list_sp[i].stt_sp==stt){
            // list_sp.splice(i,1);
            html+='<div class="edit-product"><div class="list-product"><label>STT:</label>'+list_sp[i].stt_sp+'</div><div class="list-product"><label>Tên sản phẩm:</label><input type="text" name="" id="name_sp_sua"></div><div class="list-product"><label>Ảnh sản phẩm:</label><input type="file" name="" id="images_sp_sua" accept="image/*"></div><div class="list-product"><label>Số lượng:</label><input type="text" name="" id="numbers_sp_sua"></div><div class="list-product"><label>Giá sản phẩm:</label><input type="text" name="" id="price_sp_sua"></div><div class="btn-form"><button  class="btn-add bg-success" id="btn_suasp" onclick="suasp('+list_sp[i].stt_sp+')">Sửa sản phẩm</button><button class="btn-add bg-danger" type="cancel" onclick="btn_cancel()">Cancel</button></div></div>';
            document.getElementById('form-edit-sp').innerHTML = html;
            document.getElementById('name_sp_sua').value = list_sp[i].name_sp; 
            document.getElementById('images_sp_sua').value = list_sp[i].images_sp; 
            document.getElementById('numbers_sp_sua').value = list_sp[i].numbers_sp; 
            document.getElementById('price_sp_sua').value = list_sp[i].price_sp;  
        }   
    } 
}
function suasp(stt){
    var list_sp = this.sp;
    for (let i=0;i<list_sp.length; i++){
        if(list_sp[i].stt_sp==stt){
        var name_sp = document.getElementById('name_sp_sua').value; 
        var images_sp = document.getElementById('images_sp_sua').value; 
        var numbers_sp = document.getElementById('numbers_sp_sua').value; 
        var price_sp = document.getElementById('price_sp_sua').value;  
        list_sp[i].name_sp = name_sp;
        list_sp[i].images_sp = images_sp;
        list_sp[i].numbers_sp = numbers_sp;
        list_sp[i].price_sp = price_sp;
        }
    }
    viewsp()
}

function btn_cancel() {
    document.getElementById('form-edit-sp').style.display = 'none';
    document.getElementById('form-edit-acc').style.display = 'none';
}

function xoasp(stt){
    var list_sp = this.sp;
    let cf = confirm('Bạn chắc không?');
    if (cf == true){
        for (let i=0;i<list_sp.length; i++){
            if(list_sp[i].stt_sp==stt){
                list_sp.splice(i,1);
            }   
        }
    }
    viewsp()
} 


// Thêm sửa xóa Tài khoản

var acc=[];
function themacc(){
    var id_acc = 0;
    var idAccount = document.getElementById('idAccount').value; 
    var nameAccount = document.getElementById('nameAccount').value; 
    var numbersAccount = document.getElementById('numbersAccount').value; 
    var passwordAccount = document.getElementById('passwordAccount').value;  
    
    var item_acc ={
        id_acc : id_acc,
        idAccount : idAccount,
        nameAccount : nameAccount,
        numbersAccount : numbersAccount,
        passwordAccount : passwordAccount
    };
    
// kiểm tra sản phẩm rỗng 
    if(nameAccount ==''){
        document.getElementById('nameAccount').style.borderColor = 'red';
    } else{
        document.getElementById('nameAccount').style.borderColor = 'black';
    }
    if(idAccount ==''){
        document.getElementById('idAccount').style.borderColor = 'red';
    } else{
        document.getElementById('idAccount').style.borderColor = 'black';
    }
    if(passwordAccount ==''){
        document.getElementById('passwordAccount').style.borderColor = 'red';
    } else{
        document.getElementById('passwordAccount').style.borderColor = 'black';
    }
    if (nameAccount !='' && idAccount !='' && passwordAccount !=''){
        if(!checkIDacc(idAccount)){
            this.acc.push(item_acc);
        }else{
            alert('Tên tài khoản đã tồn tại');
        }
    }
    viewacc();
}

 function viewacc(){
    var list_acc = this.acc;
    var html_acc='<div><table class="table table-dark table-striped"><thead><tr><th scope="col">Họ tên</th><th scope="col">Tên tài khoản</th><th scope="col">Mật khẩu</th><th scope="col">Số điện thoại/email</th><th scope="col">Sửa/Xóa</th></tr></thead><tbody>';
    
    for (let i=0;i<list_acc.length; i++){
        list_acc[i].id_acc = i+1;
        html_acc+="<td>"+list_acc[i].nameAccount+"</td>";
        html_acc+="<td>"+list_acc[i].idAccount+"</td>";
        html_acc+="<td>"+list_acc[i].passwordAccount+"</td>";
        html_acc+="<td>"+list_acc[i].numbersAccount+"</td>";
        html_acc+="<td><button class='btn' onclick='suaacc_form("+list_acc[i].id_acc+")'>Sửa</button><button class='btn' onclick='xoaacc("+list_acc[i].id_acc+")'>Xóa</button></td>";
        html_acc+="</tr>";
   } 
   html_acc+='</tbody></table></div>';
   document.getElementById('list_acc').innerHTML=html_acc;
}

function suaacc_form(id){
    document.getElementById('form-edit-acc').style.display = 'block';
    var html='';
    var list_acc = this.acc;
    
    for (let i=0;i<list_acc.length; i++){
        if(list_acc[i].id_acc==id){
            
            html+='<div class="edit-account"><div class="list-account"><label>Tên tài khoản:</label><input type="text" name="" id="idAccount_sua"></div><div class="list-account"><label>Họ tên:</label><input type="text" name="" id="nameAccount_sua"></div><div class="list-account"><label>Số điện thoại/email:</label><input type="text" name="" id="numbersAccount_sua"></div> <div class="list-account"> <label>Mật khẩu:</label><input type="text" name="" id="passwordAccount_sua"></div><div class="btn-form"><button  class="btn-add bg-success" id="btn_suaacc" onclick="suaacc('+list_acc[i].id_acc+')">Sửa tài khoản</button><button class="btn-add bg-danger" type="cancel" onclick="btn_cancel()">Cancel</button></div></div>';
            document.getElementById('form-edit-acc').innerHTML = html;
            document.getElementById('idAccount_sua').value = list_acc[i].idAccount; 
            document.getElementById('nameAccount_sua').value = list_acc[i].nameAccount; 
            document.getElementById('numbersAccount_sua').value = list_acc[i].numbersAccount; 
            document.getElementById('passwordAccount_sua').value = list_acc[i].passwordAccount;  
        }   
    } 
}


function suaacc(id){
    var list_acc = this.acc;
    for (let i=0;i<list_acc.length; i++){
        if(list_acc[i].id_acc==id){
        var nameAccount = document.getElementById('nameAccount_sua').value; 
        var idAccount = document.getElementById('idAccount_sua').value; 
        var numbersAccount = document.getElementById('numbersAccount_sua').value; 
        var passwordAccount = document.getElementById('passwordAccount_sua').value;  
        list_acc[i].nameAccount = nameAccount;
        list_acc[i].idAccount = idAccount;
        list_acc[i].numbersAccount = numbersAccount;
        list_acc[i].passwordAccount = passwordAccount;
        }
    }
    viewacc()
}

function xoaacc(id){
    let cf = confirm('Bạn chắc không?');
    var list_acc = this.acc;
    if(cf==true){
        for (let i=0;i<list_acc.length; i++){
            if(list_acc[i].id_acc==id){
                list_acc.splice(i,1);
            }   
        }
    }
    viewacc()
} 
// kiểm tra tài khoản đã tồn tại hay chưa
function checkIDacc(id){
    var list_acc = this.acc;
    for (let i=0; i< list_acc.length; i++){
        if(list_acc[i].idAccount==id){
            return true;
        }
    }
}
//modal
const modal=document.querySelector(".modal")
function open_modal()
{
    modal.classList.add('open')
  
}
function close_modal()
{
    modal.classList.remove('open')
}
function save_modal()
{
    alert("Đã lưu thành công")
}