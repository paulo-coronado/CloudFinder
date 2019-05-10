// Table build main file

var category = []
var id = []
var target = 0

document.addEventListener("DOMContentLoaded", function () {

    invokeTableAndNav();

});

function invokeTableAndNav() {

    $.getJSON('../data/Services.json', function (Json) {
        $.each(Json, function (key, value) {
            if (category.indexOf(value.category.name) === -1) {
                category.push(value.category.name);
            }

        });
        category = category.sort();

        for (i = 0; i < category.length; i++) {
            id[i] = category[i].toLowerCase();
            id[i] = id[i].split(' &').join('');
            id[i] = id[i].replace(/[^a-zA-Z ]/g, "");
            id[i] = id[i].split(' ').join('-');
        }


        for (i = 0; i < category.length; i++) {
            tableCreate(category[i], id[i]);
            rendertable(id[i], category[i]);
        }

        navCreate(category, id);
    });

}

function rendertable(id, category) {
    var trHTML = '';
    $.getJSON('../data/Services.json', function (Json) {
        $.each(Json, function (key, value) {

            if (value.category.name == category) {
                trHTML += '<tr>';
                // Service column with description
                // trHTML += '<td style="background-color: whitesmoke; color: black"><div class="tooltip"><b>' + value.service.name + '</b><span class="tooltiptext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description:<br><div style="color:white; margin-left:9%; margin-right:5%">' + value.service.desc + '</span></div></td>';

                trHTML += '<td style="background-color: whitesmoke; color: black"><b>' + value.service.name + '</b></td>';

                // Data cells render
                trHTML += dataprocessor(value.aws, 'aws');
                trHTML += dataprocessor(value.azure, 'azure');
                trHTML += dataprocessor(value.google, 'gcp');
                trHTML += dataprocessor(value.ibm, 'ibm');
                trHTML += dataprocessor(value.oracle, 'oracle');
                trHTML += dataprocessor(value.alibaba, 'alibaba');
            }
        });
        var $table = $('#' + id);
        $table.append(trHTML);
        $('body').css("display", "block");

    });
}

function dataprocessor(input, type) {
    var trHTML = '';
    if (input.length > 1) {
        trHTML += '<td><ul>';
        for (var i in input) {
            trHTML += '<li class="tooltip"><img src="../img/icons/cloudproviders/' + type + '/' + input[i].icon + '" class="img-responsive img-icons"><a target="_blank" style="color: black" href="' + input[i].ref + '">' + input[i].name + '</a></div></li>';
        }
        trHTML += '</ul></td>';
    } else {
        if (input[0].name === "") {
            trHTML += '<td>' + '<i class="fas fa-ban" style="color: red; font-size: 120%"></i>' + '</td>'
        } else {
            for (var i in input) {
                trHTML += '<td><ul><li class="tooltip"><img src="../img/icons/cloudproviders/' + type + '/' + input[0].icon + '" class="img-responsive img-icons"><a target="_blank" style="color: black" href="' + input[0].ref + '">' + input[0].name + '</a></li></ul></td>';
            }
        }
    }
    return trHTML;
}

// TODO Display location feature
// function formatLocation(raw) {
//     return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location:<br><ul><li style='list-style: circle; color:white; margin-left:18%'>" + strReplace(raw) + "</li></ul>";
// }

// function strReplace(myStr) {
//     return newStr = myStr.replace(/;/g, "</li><li style='list-style: circle; color:white; margin-left:18%'>");
// }

// Nav creation function
function navCreate(name, id) {

    var main = document.getElementById("create-nav");
    var nav = document.createElement("section");
    nav.setAttribute("id", "sidebar-wrapper");

    var ul = document.createElement("ul");
    ul.setAttribute("class", "sidebar-nav");

    for (i = 0; i < name.length; i++) {
        var li = [];
        var a = [];
        if (i == 0) {
            li[i] = document.createElement("li");
            li[i].setAttribute("class", "sidebar-brand");

            a[i] = document.createElement("a");

            a[i].setAttribute("class", "js-scroll-trigger");
            a[i].setAttribute("style", "font-family: Lato");

            var image = document.createElement("IMG");
            image.setAttribute("src", "img/finder-logo-bw.png");
            image.setAttribute("style", "max-width:60%; max-height:60%; width: auto; height: auto; vertical-align: middle; -webkit-filter: invert(100%); padding-right: 10px; padding-left: 10px");
            var linkText = document.createTextNode("Cloud Finder");

            a[i].appendChild(linkText);
            a[i].appendChild(image);

            li[i].appendChild(a[i]);
        } else {
            li[i] = document.createElement("li");
            li[i].setAttribute("class", "sidebar-nav-item");

            a[i] = document.createElement("a");
            var linkText = document.createTextNode(name[i - 1]);

            a[i].setAttribute("class", "js-scroll-trigger");
            a[i].setAttribute("href", "#sec-" + id[i - 1]);
            a[i].appendChild(linkText);
            li[i].appendChild(a[i]);
        }
        ul.appendChild(li[i]);
    }


    nav.appendChild(ul);
    main.appendChild(nav);
}

function tableCreate(name, id) {
    var main = document.getElementById("create-table");
    var sec = document.createElement("section");
    sec.setAttribute("class", "page-section");
    sec.setAttribute("id", "sec-" + id);

    var cont = document.createElement("div");
    cont.setAttribute("class", "container-fluid");

    var h2 = document.createElement("h2");
    h2.setAttribute("class", "text-center mt-0 serv-title");
    h2.innerText = name;

    var divider = document.createElement("hr");
    divider.setAttribute("class", "divider my-4");

    var cont2 = document.createElement("div");
    cont2.setAttribute("class", "container-fluid");

    var table = document.createElement("table");
    table.setAttribute("class", "table table-bordered table-striped table-dark");
    table.setAttribute("id", id);
    table.setAttribute("style", "max-height: 30px !important");

    var head = document.createElement("thead");
    head.setAttribute("style", "background-color: #b8cee2");

    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    var b = document.createElement("b");
    th1.innerText = "Service";

    var th2 = document.createElement("th");
    var img1 = document.createElement("img");
    img1.setAttribute("src", "img/logos/aws.png");
    img1.setAttribute("alt", "icon");
    img1.setAttribute("style", "height: 50%; width: 70%;");

    var th3 = document.createElement("th");
    var img2 = document.createElement("img");
    img2.setAttribute("src", "img/logos/msazure.png");
    img2.setAttribute("alt", "icon");
    img2.setAttribute("style", "height: 45%; width: 65%;");

    var th4 = document.createElement("th");
    var img3 = document.createElement("img");
    img3.setAttribute("src", "img/logos/google.png");
    img3.setAttribute("alt", "icon");
    img3.setAttribute("style", "height: 50%; width: 80%;");

    var th5 = document.createElement("th");
    var img4 = document.createElement("img");
    img4.setAttribute("src", "img/logos/IBM-Cloud.png");
    img4.setAttribute("alt", "icon");
    img4.setAttribute("style", "height: 34%; width: 75%;");

    var th6 = document.createElement("th");
    var img5 = document.createElement("img");
    img5.setAttribute("src", "img/logos/oracle.png");
    img5.setAttribute("alt", "icon");
    img5.setAttribute("style", "height: 60%; width: 60%;");

    var th7 = document.createElement("th");
    var img6 = document.createElement("img");
    img6.setAttribute("src", "img/logos/alibaba.png");
    img6.setAttribute("alt", "icon");
    img6.setAttribute("style", "height: 40%; width: 60%;");

    th7.appendChild(img6);
    th6.appendChild(img5);
    th5.appendChild(img4);
    th4.appendChild(img3);
    th3.appendChild(img2);
    th2.appendChild(img1);
    th1.appendChild(b);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tr.appendChild(th6);
    tr.appendChild(th7);
    head.appendChild(tr);
    table.appendChild(head);
    cont2.appendChild(table);
    cont.appendChild(h2);
    cont.appendChild(divider);
    cont.appendChild(cont2);
    sec.appendChild(cont);
    main.appendChild(sec);

}

// TODO FAZENDOOOOO

document.getElementById("searcher").addEventListener("keydown", function (e) {
    if (!e) {
        var e = window.event;
    }

    // When Enter key is pressed
    if (e.keyCode == 13) {
        for (i = 0; i < category.length; i++) {
            finder($("#searcher").val(), id[i]);
        }
        // finder($("#searcher").val(), "ai");
        // finder($("#searcher").val(), "application-service");
        // finder($("#searcher").val(), "bd-analytics");
        // finder($("#searcher").val(), "compute");
        // finder($("#searcher").val(), "db");
        // finder($("#searcher").val(), "dev");
        // finder($("#searcher").val(), "iot");
        // finder($("#searcher").val(), "management");
        // finder($("#searcher").val(), "migration");
        // finder($("#searcher").val(), "mobile");
        // finder($("#searcher").val(), "network-cd");
        // finder($("#searcher").val(), "security");
        // finder($("#searcher").val(), "storage");
        // finder($("#searcher").val(), "other");
        if (target == 0) {
            event.preventDefault();
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Service not found!',
                footer: '<a href="https://versus.mybluemix.net/" target="_blank">How to collaborate with the website?</a>'

            })
        }
        target = 0;
        $("#searcher").val("");
    }
}, false);

document.getElementById("btn-searcher").addEventListener("click", function () {
    for (i = 0; i < category.length; i++) {
        finder($("#searcher").val(), id[i]);
    }
    // finder($("#searcher").val(), "ai");
    // finder($("#searcher").val(), "application-service");
    // finder($("#searcher").val(), "bd-analytics");
    // finder($("#searcher").val(), "compute");
    // finder($("#searcher").val(), "db");
    // finder($("#searcher").val(), "dev");
    // finder($("#searcher").val(), "iot");
    // finder($("#searcher").val(), "management");
    // finder($("#searcher").val(), "migration");
    // finder($("#searcher").val(), "mobile");
    // finder($("#searcher").val(), "network-cd");
    // finder($("#searcher").val(), "security");
    // finder($("#searcher").val(), "storage");
    // finder($("#searcher").val(), "other");
    if (target == 0) {
        alert("Service not found!");
    }
    target = 0;
    $("#searcher").val("");
})

function finder(input, tableid) {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    filter = input.toUpperCase();
    table = document.getElementById(tableid);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        for (j = 0; j < 6; j++) {
            td = tr[i].getElementsByTagName("td")[j];
            if (td && target != 1) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1 && target != 1) {
                    document.getElementById('sec-' + tableid).scrollIntoView();
                    target = 1
                } else {
                    target = 0;
                }
            }
        }
    }
}