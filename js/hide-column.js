
var verify = { amazon: true, azure: true, google: true, ibm: true, oracle: true, alibaba: true };

// function hidecolumn(idcolumn){
//     var prov = idcolumn;
//     var provnumber;
//     if(prov == "amazon"){
//         provnumber = 1;
//     }
//     if(prov == "azure"){
//         provnumber = 2;
//     }
//     if(prov == "google"){
//         provnumber = 3;
//     }
//     if(prov == "ibm"){
//         provnumber = 4;
//     }
//     if(prov == "oracle"){
//         provnumber = 5;
//     }
//     if(prov == "alibaba"){
//         provnumber = 6;
//     }
//     if(verify[prov] == true){
//         document.getElementById(prov).className="unselected";

//         verify[prov] = false;
//     }
//     else{
//         document.getElementById(prov).className="selected";
//         $('table').showColumn(provnumber);
//         verify[prov] = true;

//     }
// }
var cont;
cont = 6;
$('#btamazon').click(function () {
  if (verify['amazon'] == true) {
    $("#btamazon").removeClass("selected");
    $("#btamazon").addClass("unselected");
    ash.get('.table').hideColumn(2);
    verify['amazon'] = false;
    cont = cont - 1;
  }
  else {
    $("#btamazon").removeClass("unselected");
    $("#btamazon").addClass("selected");
    ash.get('.table').showColumn(2);
    verify['amazon'] = true;
    cont = cont + 1;
  }
  ajuste();
});

$('#btazure').click(function () {
  if (verify['azure'] == true) {
    $("#btazure").removeClass("selected");
    $("#btazure").addClass("unselected");
    ash.get('.table').hideColumn(3);
    verify['azure'] = false;
    cont = cont - 1;
  }
  else {
    $("#btazure").removeClass("unselected");
    $("#btazure").addClass("selected");
    ash.get('.table').showColumn(3);
    verify['azure'] = true;
    cont = cont + 1;
  }
  ajuste();
});

$('#btgoogle').click(function () {
  if (verify['google'] == true) {
    $("#btgoogle").removeClass("selected");
    $("#btgoogle").addClass("unselected");
    ash.get('.table').hideColumn(4);
    verify['google'] = false;
    cont = cont - 1;
  }
  else {
    $("#btgoogle").removeClass("unselected");
    $("#btgoogle").addClass("selected");
    ash.get('.table').showColumn(4);
    verify['google'] = true;
    cont = cont + 1;
  }
  ajuste();
});

$('#btibm').click(function () {
  if (verify['ibm'] == true) {
    $("#btibm").removeClass("selected");
    $("#btibm").addClass("unselected");
    ash.get('.table').hideColumn(5);
    verify['ibm'] = false;
    cont = cont - 1;
  }
  else {
    $("#btibm").removeClass("unselected");
    $("#btibm").addClass("selected");
    ash.get('.table').showColumn(5);
    verify['ibm'] = true;
    cont = cont + 1;
  }
  ajuste();
});

$('#btoracle').click(function () {
  if (verify['oracle'] == true) {
    $("#btoracle").removeClass("selected");
    $("#btoracle").addClass("unselected");
    ash.get('.table').hideColumn(6);
    verify['oracle'] = false;
    cont = cont - 1;
  }
  else {
    $("#btoracle").removeClass("unselected");
    $("#btoracle").addClass("selected");
    ash.get('.table').showColumn(6);
    verify['oracle'] = true;
    cont = cont + 1;
  }
  ajuste();
});

$('#btalibaba').click(function () {
  if (verify['alibaba'] == true) {
    $("#btalibaba").removeClass("selected");
    $("#btalibaba").addClass("unselected");
    ash.get('.table').hideColumn(7);
    verify['alibaba'] = false;
    cont = cont - 1;
  }
  else {
    $("#btalibaba").removeClass("unselected");
    $("#btalibaba").addClass("selected");
    ash.get('.table').showColumn(7);
    verify['alibaba'] = true;
    cont = cont + 1;
  }
  ajuste();
});
var classtable = 6;
var count;
function ajuste() {
  var tables = document.getElementsByClassName('table').length;
  if (cont == 1) {
    for(count == 0; count <= tables-1; count++){
      document.getElementsByClassName('table')[count].classList.remove(classtable);
      document.getElementsByClassName('table')[count].classList.add('table1');
    }

      
    
    classtable = 'table1';

  }
  else if (cont == 2) {
    for(count == 0; count <= tables-1; count++){
      document.getElementsByClassName('table')[count].classList.remove(classtable);
      document.getElementsByClassName('table')[count].classList.add('table2');
    }
    classtable = 'table2';
  }
  else if (cont == 3) {
    for(count == 0; count <= tables-1; count++){
      document.getElementsByClassName('table')[count].classList.remove(classtable);
      document.getElementsByClassName('table')[count].classList.add('table3');
    }
    classtable = 'table3';
  }
  else if (cont == 4) {
    for(count == 0; count <= tables-1; count++){
      document.getElementsByClassName('table')[count].classList.remove(classtable);
      document.getElementsByClassName('table')[count].classList.add('table4');
    }
    classtable = 'table4';
  }
  else if (cont == 5) {
    for(count == 0; count <= tables-1; count++){
      document.getElementsByClassName('table')[count].classList.remove(classtable);
      document.getElementsByClassName('table')[count].classList.add('table5');
    }
    classtable = 'table5';
  }
  else if (cont == 6) {
    try {
      for(count == 0; count <= tables-1; count++){
        document.getElementsByClassName('table')[count].classList.remove(classtable);
      }
    }
    catch{

    }
    for(count == 0; count <= tables-1; count++){
      document.getElementsByClassName('table')[count].classList.add('table6');
    }


    classtable = 'table6';
  }
  else {
    document.getElementsByClassName('table').classList.remove(classtable);
    document.getElementsByClassName('table').classList.add('table0');
    classtable = 'table0';
  }

}



