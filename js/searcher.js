// // Search feature function

// var target = 0

// document.getElementById("searcher").addEventListener("keydown", function (e) {
//     if (!e) {
//         var e = window.event;
//     }

//     // When Enter key is pressed
//     if (e.keyCode == 13) {

//         finder($("#searcher").val(), "ai");
//         finder($("#searcher").val(), "application-service");
//         finder($("#searcher").val(), "bd-analytics");
//         finder($("#searcher").val(), "compute");
//         finder($("#searcher").val(), "db");
//         finder($("#searcher").val(), "dev");
//         finder($("#searcher").val(), "iot");
//         finder($("#searcher").val(), "management");
//         finder($("#searcher").val(), "migration");
//         finder($("#searcher").val(), "mobile");
//         finder($("#searcher").val(), "network-cd");
//         finder($("#searcher").val(), "security");
//         finder($("#searcher").val(), "storage");
//         finder($("#searcher").val(), "other");
//         if (target == 0) {
//             event.preventDefault();
//             Swal.fire({
//                 type: 'error',
//                 title: 'Oops...',
//                 text: 'Service not found!',
//                 footer: '<a href="https://versus.mybluemix.net/" target="_blank">How to collaborate with the website?</a>'

//             })
//         }
//         target = 0;
//         $("#searcher").val("");
//     }
// }, false);

// document.getElementById("btn-searcher").addEventListener("click", function () {
//     finder($("#searcher").val(), "ai");
//     finder($("#searcher").val(), "application-service");
//     finder($("#searcher").val(), "bd-analytics");
//     finder($("#searcher").val(), "compute");
//     finder($("#searcher").val(), "db");
//     finder($("#searcher").val(), "dev");
//     finder($("#searcher").val(), "iot");
//     finder($("#searcher").val(), "management");
//     finder($("#searcher").val(), "migration");
//     finder($("#searcher").val(), "mobile");
//     finder($("#searcher").val(), "network-cd");
//     finder($("#searcher").val(), "security");
//     finder($("#searcher").val(), "storage");
//     finder($("#searcher").val(), "other");
//     if (target == 0) {
//         alert("Service not found!");
//     }
//     target = 0;
//     $("#searcher").val("");
// })

// function finder(input, tableid) {
//     // Declare variables 
//     var input, filter, table, tr, td, i, txtValue;
//     filter = input.toUpperCase();
//     table = document.getElementById(tableid);
//     tr = table.getElementsByTagName("tr");

//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//         for (j = 0; j < 6; j++) {
//             td = tr[i].getElementsByTagName("td")[j];
//             if (td && target != 1) {
//                 txtValue = td.textContent || td.innerText;
//                 if (txtValue.toUpperCase().indexOf(filter) > -1 && target != 1) {
//                     document.getElementById('sec-' + tableid).scrollIntoView();
//                     target = 1
//                 } else {
//                     target = 0;
//                 }
//             }
//         }
//     }
// }