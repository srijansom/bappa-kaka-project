/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ContractorDeatilsPage = true;
$(document).ready(function () {
    ContractorDeatilsPage = true;
    $('.addNewContractor').show();
});
function addNewContractor() {
    var addContractorName = document.getElementById("addContractorNameInputId").value;
    $.ajax({
        type: "POST",
        url: 'ContractorList/addNewContractor',
        cache: false,
        data: {
            contractorName: addContractorName
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
function deleteContractorById(dynamicId) {
    if (isNaN(dynamicId)) {
        return;
    }
    $.ajax({
        type: "POST",
        url: 'ContractorList/deleteContractorById',
        cache: false,
        data: {
            contractorId: dynamicId
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
            if (data.status != undefined && data.status != null && data.status == false) {
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
function getAllActiveContractorDetails() {
//    alert();
    $.ajax({
        type: "GET",
        url: 'ContractorList/getAllActiveContractorDetails',
        cache: false,
        dataType: "json",
        success: function (data) {
            var event_data = '';
            $.each(data, function (index, value) {
                event_data += '<tr>';
                event_data += '<td>'
                        + '<span id="deleteContractorId' + value.contractor_id + '">' + value.contractor_name
                        + '&nbsp;&nbsp;<i class="fa fa-trash" aria-hidden="true" style="cursor : pointer" onclick="deleteContractorById(' + value.contractor_id + ')"></i>'
                        + '</span>'
                '</td>';
                event_data += '</tr>';
            });
            $('#contractorDetailsTableId').append(event_data);
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}
getAllActiveContractorDetails();
