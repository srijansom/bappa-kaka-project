/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

LabourChargeTypePage = true;
$(document).ready(function () {
    LabourChargeTypePage = true;
    $('.addNewLabourChargeType').show();
});
function getAllLabourChargeDetails() {
//    alert();
    $.ajax({
        type: "GET",
        url: 'getAllLabourChargeDetails',
        cache: false,
        dataType: "json",
        success: function (data) {//<i class="fa fa-trash" aria-hidden="true"></i>
            var event_data = '';
            $.each(data, function (index, value) {
                event_data += '<tr>';
                event_data += '<td>'
                        + '<span id="deleteLabourChargeId' + value.labour_charge_id + '">' + value.labour_charge_name
                        + '&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true" style="cursor : pointer" onclick="deleteLabourCharge(' + value.labour_charge_id + ')"></i>'
                        + '</span>'

//                        + '<span id="deleteLabourChargeId' + value.labour_charge_id + '">'
//                        + '&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true" style="cursor : pointer" onclick="editLabourCharge(' + value.labour_charge_id + ')"></i>'
//                        + value.labour_charge_name +
////                        + '</span>'
                '</td>';
                event_data += '<td>'
                        + '<span id="showLabourChargeId' + value.labour_charge_id + '">' + '\u20B9' + value.labour_charge_amount / 100 + '/ 1000 brick'
                        + '&nbsp;&nbsp;<i class="fa fa-pencil-square-o" aria-hidden="true" style="cursor : pointer" onclick="editLabourCharge(' + value.labour_charge_id + ')"></i>'
                        + '</span>'

                        + '<span id="editLabourChargeId' + value.labour_charge_id + '" style="display : none">'
                        + ' <input id="labourChargeInputId' + value.labour_charge_id + '" type="text" value="' + value.labour_charge_amount / 100 + '">'
                        + '&nbsp;&nbsp;<i class="fa fa-floppy-o" aria-hidden="true" style="cursor : pointer" onclick="saveLabourCharge(' + value.labour_charge_id + ')"></i>'
                        + '&nbsp;&nbsp;<i class="fa fa-window-close" aria-hidden="true" style="cursor : pointer" onclick="discardLabourCharge(' + value.labour_charge_id + ')"></i>'
                        + '</span>'

                        + '</td>';
                event_data += '</tr>';
            });
            $('#labourChargeDetailsTableId').append(event_data);
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}
getAllLabourChargeDetails();//
function deleteLabourCharge(selectorId) {
    if (isNaN(selectorId)) {
        return;
    }
    $.ajax({
        type: "POST",
        url: 'LabourCharge/deleteExistingLabourCharge',
        cache: false,
        data: {
            labourChargeId: selectorId
        },
        dataType: "json",
        success: function (data) {
            if (data.status != undefined && data.status != null && data.status == true) {
                swal({title: "Success", icon: "success", text: "Done"})
                        .then(function () {
                            location.reload();
                        }
                        );
            }
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}
function discardLabourCharge(selectorId) {
    $('#showLabourChargeId' + selectorId).show();
    $('#editLabourChargeId' + selectorId).hide();
}
function editLabourCharge(selectorId) {
    $('#showLabourChargeId' + selectorId).hide();
    $('#editLabourChargeId' + selectorId).show();
}

function saveLabourCharge(selectorId) {
    var labourChargeId = selectorId;
    var updatedLabourCharge = document.getElementById("labourChargeInputId" + selectorId).value;
    if (!isNaN(updatedLabourCharge)) {
        updatedLabourCharge = updatedLabourCharge * 100;
    } else {
        return;
    }

    $.ajax({
        type: "POST",
        url: 'LabourCharge/updateLoabourCharge',
        cache: false,
        data: {
            labourChargeId: labourChargeId,
            updatedLabourCharge: updatedLabourCharge
        },
        dataType: "json",
        success: function (data) {
            if (data.status != undefined && data.status != null && data.status == true) {
                swal({title: "Success", icon: "success", text: "Done"})
                        .then(function () {
                            location.reload();
                        }
                        );
            }
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
    $('#showLabourChargeId' + selectorId).show();
    $('#editLabourChargeId' + selectorId).hide();
}
function addNewLabourCharge() {
//    alert();
    var addLabourChargeName = document.getElementById("addLabourChargeNameInputId").value;
    var addLabourChargeRate = document.getElementById("addLabourChargeRateInputId").value;
    if (isNaN(addLabourChargeRate)) {
        return;
    }
    $.ajax({
        type: "POST",
        url: 'LabourCharge/addNewLabourCharge',
        cache: false,
        data: {
            addLabourChargeName: addLabourChargeName,
            addLabourChargeRate: addLabourChargeRate
        },
        dataType: "json",
        success: function (data) {
            if (data.status != undefined && data.status != null && data.status == true) {
                swal({title: "Success", icon: "success", text: "Done"})
                        .then(function () {
                            location.reload();
                        }
                        );
            }
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}


//<i class="fa fa-floppy-o" aria-hidden="true"></i>