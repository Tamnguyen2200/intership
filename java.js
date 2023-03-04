function Exportreport(){
    var nam = document.getElementById('Year').value
    console.log(nam)
    var thang = document.getElementById('Month').value
    console.log(thang)
    alert('xuất báo cáo: '+thang+'/'+nam)
}
function resetdata(){
    document.getElementById('textclear').value = '', 
    document.location.reload()
}
function searchdata(){
    let input = document.getElementById('textclear').value
    if (input != null){
        console.log(input)
        var table = document.querySelectorAll(".back-White")
        for (var i = 0 ; i < table.length; i++){
            var result = table[i].getElementsByTagName('h4')[0].innerText;
            console.log(result)
            if(result){
                if (result.indexOf(input) > -1){
                    table[i].style.display = "";
                }else{
                    table[i].style.display = "none";
                }
            }
        }
    }
}