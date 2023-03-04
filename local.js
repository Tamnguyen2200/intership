const list_report = "list_report"
let reports = [
    {
        Ma: 'P001',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P002',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P003',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P004',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P005',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P006',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P007',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P008',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P009',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P0010',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P0011',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P0012',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P0013',
        tenbaocao: 'báo cáo bán lẻ-online',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
    {
        Ma: 'P0014',
        tenbaocao: 'báo cáo bán hàng',
        mota:'Báo cáo thống kê tình hình bán lẻ tại các cửa hàng và bán hàng các kênh online theo tần suất tuần/tháng',
    },
]
localStorage.setItem(list_report, JSON.stringify(reports))

function renderlistreport(){
    let data = JSON.parse(localStorage.getItem(list_report))
    console.log(data)
    let tablecontent = `
        <tr>
            <th class="fonttext">Mã</th>
            <th class="fonttext">Tên báo cáo</th>
            <th class="fonttext">Mô tả</th>
            <th> </th>
        </tr>
    `
    reports.forEach((report, index) =>{
        index ++;
        tablecontent += `
            <tr class="back-White">
                <th class="fonttext">${report.Ma}</th>
                <th id="name"><h4>${report.tenbaocao}</h4></th>
                <th class="fonttext fontweight">${report.mota}</th>
                <th class="Event">
                    <label for="${report.Ma}"  class="option_item">
                        <input type="checkbox" class="checkbox" name="" id="${report.Ma}">
                        <div class="tick_doticon">
                            <i class="fa-solid fa-ellipsis custom"></i>
                            <div class="">
                                <div class="box-item">
                                    <img src="img/xlsx.png" alt="">
                                    <a class="no" href="#my-dialog">Xuất ra Excel</a>
                                </div>
                            </div>  
                        </div>
                    </label>
                </th>
            </tr>
            `
    }
    )
    document.getElementById('List_report').innerHTML = tablecontent;
}
