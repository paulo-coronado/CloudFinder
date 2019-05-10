//Table cells builder

// $(document).ready(function () {
//     rendertable("ai", "Artificial Intelligence");
//     rendertable("application-service", "Application Services");
//     rendertable("bd-analytics", "Database");
//     rendertable("compute", "Compute");
//     rendertable("db", "Database");
//     rendertable("dev", );
//     rendertable("iot", );
//     rendertable("management", );
//     rendertable("migration", );
//     rendertable("mobile", );
//     rendertable("network-cd", );
//     rendertable("other", );
//     rendertable("security", );
//     rendertable("storage", );
// });

// function rendertable(id) {
//     var trHTML = '';
//     $.getJSON('../data/' + id + '.json', function (Json) {
//         $.each(Json, function (key, value) {
//             trHTML += '<tr>';
//             // Service column with description
//             // trHTML += '<td style="background-color: whitesmoke; color: black"><div class="tooltip"><b>' + value.service.name + '</b><span class="tooltiptext">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description:<br><div style="color:white; margin-left:9%; margin-right:5%">' + value.service.desc + '</span></div></td>';

//             trHTML += '<td style="background-color: whitesmoke; color: black"><b>' + value.service.name + '</b></td>';

//             // Data cells render
//             trHTML += dataprocessor(value.aws, 'aws');
//             trHTML += dataprocessor(value.azure, 'azure');
//             trHTML += dataprocessor(value.google, 'gcp');
//             trHTML += dataprocessor(value.ibm, 'ibm');
//             trHTML += dataprocessor(value.oracle, 'oracle');
//             trHTML += dataprocessor(value.alibaba, 'alibaba');
//         });
//         var $table = $('#' + id);
//         $table.append(trHTML);
//         $('body').css("display", "block");
//     });
// }

// function dataprocessor(input, type) {
//     var trHTML = '';
//     if (input.length > 1) {
//         trHTML += '<td><ul>';
//         for (var i in input) {
//             trHTML += '<li class="tooltip"><img src="../img/icons/cloudproviders/' + type + '/' + input[i].icon + '" class="img-responsive img-icons"><a target="_blank" style="color: black" href="' + input[i].ref + '">' + input[i].name + '</a></div></li>';
//         }
//         trHTML += '</ul></td>';
//     } else {
//         if (input[0].name === "") {
//             trHTML += '<td>' + '<i class="fas fa-ban" style="color: red; font-size: 120%"></i>' + '</td>'
//         } else {
//             for (var i in input) {
//                 trHTML += '<td><ul><li class="tooltip"><img src="../img/icons/cloudproviders/' + type + '/' + input[0].icon + '" class="img-responsive img-icons"><a target="_blank" style="color: black" href="' + input[0].ref + '">' + input[0].name + '</a></li></ul></td>';
//             }
//         }
//     }
//     return trHTML;
// }

// Display location feature
// function formatLocation(raw) {
//     return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location:<br><ul><li style='list-style: circle; color:white; margin-left:18%'>" + strReplace(raw) + "</li></ul>";
// }

// function strReplace(myStr) {
//     return newStr = myStr.replace(/;/g, "</li><li style='list-style: circle; color:white; margin-left:18%'>");
// }