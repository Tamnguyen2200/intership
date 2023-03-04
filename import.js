const list_import = "list_import"
let imports = [
    {
        Ma: 'P001',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P002',
        tendoituongimport: 'Cập nhật thông tin bán hàng online',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P003',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P004',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P005',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P006',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P007',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P008',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
    {
        Ma: 'P009',
        tendoituongimport: 'Cập nhật thông tin hàng hóa',
        mota:'Cập nhật những dữ liệu liên quan tới thông tin hàng hóa để hiện thị trên hệ thống và website ',
    },
]
localStorage.setItem(list_import, JSON.stringify(imports))
function renderlistImport(){
    let data = JSON.parse(localStorage.getItem(list_import))
    console.log(data)
    let tablecontent = `
        <tr>
            <th class="fonttext">Mã</th>
            <th class="fonttext">Tên đối tượng import</th>
            <th class="fonttext">Mô tả</th>
            <th> </th>
        </tr>
    `
    imports.forEach((importx, index) =>{
        index ++;
        tablecontent += `
            <tr class="back-White">
                <th class="fonttext">${importx.Ma}</th>
                <th id="name"><h4>${importx.tendoituongimport}</h4></th>
                <th class="fonttext fontweight">${importx.mota}</th>
                <th class="Event">
                    <label for="${importx.Ma}"  class="option_item">
                        <input type="checkbox" class="checkbox" name="" id="${importx.Ma}">
                        <div class="tick_doticon">
                            <i class="fa-solid fa-ellipsis custom"></i>
                            <div class="">
                                <div class="nonedisplay">
                                    <div class = "chos">
                                        <img src="img/xlsx.png" alt="">
                                        <a class="no" onclick="select(this)">Download template</a>
                                    </div>
                                    <div class = "chos">
                                        <img src="img/xlsx.png" alt="">
                                        <a class="no" onclick="select(this)">Import Excel</a>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </label>
                </th>
            </tr>
            `
    }
    )
    document.getElementById('list_import').innerHTML = tablecontent;
}
function select(t){
    var inHTML = t.innerHTML
    var value = (inHTML.split('">')[0])
    alert('bạn chọn '+value)
}