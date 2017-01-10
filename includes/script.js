function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
window.onload = function tableCreate() {
    var body = document.getElementById("tTable");
    var tbl = document.createElement('table');
    var tbdy = document.createElement('tbody');
    var startDate = new Date("December 26, 2016 05:30:00");
    var hour = addZero(startDate.getHours());
    var minute = addZero(startDate.getMinutes());
    var day = startDate.getDate();
    var month = startDate.getMonth();
    var dateValue = [];
    month++;
    for (var i = 0; i < 13; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 6; j++) {                
                if(i==0){
                	var th = document.createElement('th');
                	dateValue[dateValue.length]=day + "/" + month;
                	th.appendChild(document.createTextNode(dateValue[j]));           
                	tr.appendChild(th);
                	day++;
                }else{
                	var td = document.createElement('td');
                	var link = document.createElement("a");
                	var value = hour + ":" + minute;
                	var url = "order.html?time=" + value + "&date=" + dateValue[j];
					link.setAttribute("href", url);
                	var linkText = document.createTextNode(value);
					link.appendChild(linkText);
					td.appendChild(link);
                	tr.appendChild(td);
                }                
        }
        hour++;
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
};

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}