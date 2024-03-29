/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getAllLabourChargeDetails(dynamicLabourChargeDetailsDropDownId) {
//    alert();
    $.ajax({
        type: "GET",
        url: 'getAllLabourChargeDetails',
        cache: false,
        dataType: "json",
        success: function (data) {
            var labourChargeAmountObj = {};
            $('#' + dynamicLabourChargeDetailsDropDownId).find('option').remove();
            var wageDropDown = document.getElementById(dynamicLabourChargeDetailsDropDownId);
            var option1 = document.createElement("option");
            option1.text = "--Select--";
            wageDropDown.add(option1);
            $.each(data, function (index, value) {
                labourChargeAmountObj[value.labour_charge_id] = value.labour_charge_amount;
                var option = document.createElement("option");
                option.text = value.labour_charge_name;
                option.value = value.labour_charge_id;
                wageDropDown.add(option);
            });
            localStorage.setItem("labourChargeAmountObj", JSON.stringify(labourChargeAmountObj));
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}
function getlabourWageType(dynamicWageDropDownId, dynamicLabourDropDownId) {
//    alert();
    $.ajax({
        type: "GET",
        url: 'getlabourWageType',
        cache: false,
        dataType: "json",
        success: function (data) {
            $('#' + dynamicWageDropDownId).find('option').remove();
            var wageDropDown = document.getElementById(dynamicWageDropDownId);
            var option1 = document.createElement("option");
            option1.text = "--Select--";
            wageDropDown.add(option1);
            $.each(data, function (index, value) {
                var option = document.createElement("option");
                option.text = value.name;
                option.value = value.id;
                wageDropDown.add(option);
            });
        },
        error: function (data) {
            $('#' + dynamicWageDropDownId).find('option').remove();
            $('#' + dynamicWageDropDownId).find('option').remove();
            var wageDropDown = document.getElementById(dynamicWageDropDownId);
            var option1 = document.createElement("option");
            option1.text = "--Select--";
            wageDropDown.add(option1);
            console.log("Error Happen");
        }
    });
}

function getLabourRoleBasedOnWageType(dynamicWageDropDownId, dynamicLabourDropDownId) {
    var wageDropDown = document.getElementById(dynamicWageDropDownId);
    var wageTypeId = wageDropDown.options[wageDropDown.selectedIndex].value;
//    alert(dynamicLabourDropDownId);//labourRoleDropDownId
    if (wageTypeId != undefined && wageTypeId != null && wageTypeId == 2) {
        $('#dailyWageDivId' + +dynamicLabourDropDownId.split("labourRoleDropDownId")[1]).hide();
        $('#monthlyWageDivId' + dynamicLabourDropDownId.split("labourRoleDropDownId")[1]).show();
    }
    if (wageTypeId != undefined && wageTypeId != null && wageTypeId == 1) {
        $('#monthlyWageDivId' + dynamicLabourDropDownId.split("labourRoleDropDownId")[1]).hide();
        $('#dailyWageDivId' + dynamicLabourDropDownId.split("labourRoleDropDownId")[1]).show();
        $("#dailyWageDivId" + dynamicLabourDropDownId.split("labourRoleDropDownId")[1]).css("display", "flex");
    }
//    alert(wageTypeId);
    $.ajax({
        type: "GET",
        url: 'getLabourRoleBasedOnWageType',
        data: {
            wageTypeId: wageTypeId
        },
        cache: false,
        dataType: "json",
        success: function (data) {
            $('#' + dynamicLabourDropDownId).find('option').remove();
            var labourRoleDropDown = document.getElementById(dynamicLabourDropDownId);
            var option1 = document.createElement("option");
            option1.text = "--Select--";
            labourRoleDropDown.add(option1);
            $.each(data, function (index, value) {
                var option = document.createElement("option");
                option.text = value.name;
                option.value = value.id;
                labourRoleDropDown.add(option);
            });
        },
        error: function (data) {
            $('#' + dynamicLabourDropDownId).find('option').remove();
            var labourRoleDropDown = document.getElementById(dynamicLabourDropDownId);
            var option1 = document.createElement("option");
            option1.text = "--Select--";
            labourRoleDropDown.add(option1);
            console.log("Error Happen");
        }
    });
}
function getLabourChargeAmountDetailsByLabourChargeId(dyanamicLabourChargeDropDownId, dynamcLabourChargeAmountSpanId) {
    var labourChargeDropDown = document.getElementById(dyanamicLabourChargeDropDownId);
    var labourChargeId = labourChargeDropDown.options[labourChargeDropDown.selectedIndex].value;
    var rupeesSign = '\u20B9';
    var labourChargeAmountObj = JSON.parse(localStorage.getItem("labourChargeAmountObj"));
    $("#" + dynamcLabourChargeAmountSpanId).text("  Rate : " + rupeesSign + labourChargeAmountObj[labourChargeId] / 100);
}
function getAllLabourDetailsBasedOnLabourRole() {
    var labourRoleDropDown = document.getElementById("labourRoleDropDownId");
    var labourRoleId = labourRoleDropDown.options[labourRoleDropDown.selectedIndex].value;
//    alert(wageTypeId);
    $.ajax({
        type: "GET",
        url: 'getAllLabourDetailsBasedOnLabourRole',
        data: {
            labourRoleId: labourRoleId
        },
        cache: false,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}
function view(dynamicWageDropDownId, hiddenDiv) {
    if ($("#" + hiddenDiv).css('visibility').toLowerCase() == 'visible') {
        $("#" + hiddenDiv).css("visibility", "hidden");
    } else if ($("#" + hiddenDiv).css('visibility').toLowerCase() == 'hidden') {
        $("#" + hiddenDiv).css("visibility", "visible");
    }
    $("#hiddenDivForWithdraw" + hiddenDiv.split("hiddenDiv")[1]).toggle();
    getlabourWageType(dynamicWageDropDownId, hiddenDiv);
}
var globalContractorId;
function getAllActiveLabourDetailsByContractorId() {
    var contractorId = $("#selectContractorId option:selected").val();
    globalContractorId = contractorId;
    localStorage.setItem("globalContractorId", globalContractorId);
//    alert(contractorId);
//    return;
    $.ajax({
        type: "GET",
        url: 'getAllActiveLabourDetailsByContractorId',
        cache: false,
        dataType: "json",
        data: {
            contractorId: contractorId
        },
        success: function (data) {
            $('#containerDivId').empty();
            $.each(data, function (index, value) {
                var dynamic_div = "<div class='dyanmicLabourClass' id='dyanmicLabourID" + value.labour_id + "'>";
                dynamic_div += '<span>Name : </span>&nbsp;'
                dynamic_div += '<span><b>' + value.labour_name + '</b>&nbsp;&nbsp;<i style="cursor: pointer;" class="fa fa-pencil-square-o" aria-hidden="true" onclick="view(' + "'" + "wageDropDownId" + value.labour_id + "'" + ',' + "'"
                        + "hiddenDiv" + value.labour_id + "'" + ')"></i>&nbsp;&nbsp;<i style="cursor: pointer;" class="fa fa-trash" aria-hidden="true" onclick="deleteLabourById(' + value.labour_id + ",'" + value.labour_name + "'" + ')"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                dynamic_div += '<span>Khoraki : </span>&nbsp;'
                dynamic_div += '<span>&#8377;' + value.labour_khoraki + '</span><br><br>';
                dynamic_div += "</div>";
                var dynamic_hidden_div = '<div id="hiddenDiv' + value.labour_id + '" class="labouRoleAndWageSelectorClass" class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>';

                var dynamic_hidden_div_for_withdraw = '<div id="hiddenDivForWithdraw' + value.labour_id + '" class="hiddenDivForWithdrawClass" class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><b>Withdraw : </b>'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input class"cssDiv withDrawMoneyClass" id="withDrawMoneyId' + value.labour_id + '" type="number" value="0">'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" id="datePickerIdForWithDrawMoney' + value.labour_id + '">'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="withDrawMoneyButton" onclick="withDrawMoney(' + value.labour_id + ')">Submit</button></div>';

                var wageDropDown = '<b>Deposit :</b> <select class="selectOptionBox cssDiv" id="wageDropDownId'
                        + value.labour_id + '" onchange="getLabourRoleBasedOnWageType(' + "'" + "wageDropDownId" + value.labour_id + "'" + ','
                        + "'labourRoleDropDownId" + value.labour_id + "'" + ')">'
                        + '<option>--Select--</option>' +
                        +'</select>';

                var labourRoleDropDown = '<select class="selectOptionBox cssDiv" id="labourRoleDropDownId' + value.labour_id + '" onchange="getAllLabourChargeDetails('
                        + "'labourChargeDetailsDropDownId" + value.labour_id + "'"
                        + ')">'
                        + ' <option>--Select--</option>'
                        + '</select>';
                var labourChargeDetailsWithDropDown = '<table class="cssDiv" id="labourChargeDetailsTableId' + value.labour_id + '"><tbody><tr><td>'
                        + '<select class="selectOptionBox" id="labourChargeDetailsDropDownId' + value.labour_id + '" onchange="getLabourChargeAmountDetailsByLabourChargeId('
                        + "'labourChargeDetailsDropDownId" + value.labour_id + "','labourChargeAmountSpanId" + value.labour_id + "'" + ')">'
                        + ' <option>--Select--</option>'
                        + '</select>'
                        + '</td><td><span id="labourChargeAmountSpanId' + value.labour_id + '"></span><a href="/HelloWorld/LabourCharge"><i style="cursor: pointer" class="fa fa-external-link" aria-hidden="true"></i></a></td></tr></tbody></table>';

                var dyanmicLabourID = "dyanmicLabourID" + value.labour_id;
                var hiddenDivId = "hiddenDiv" + value.labour_id;

                $('#containerDivId').append(dynamic_div);
                $('#' + dyanmicLabourID).append(dynamic_hidden_div);
                $('#' + dyanmicLabourID).append(dynamic_hidden_div_for_withdraw);
                $('#' + hiddenDivId).append(wageDropDown);
                $('#' + hiddenDivId).append(labourRoleDropDown);


                var dailyWageDiv = '<div class="dailyWageDivClass" id="dailyWageDivId' + value.labour_id + '"></div>';
                $('#' + hiddenDivId).append(dailyWageDiv);

                var monthlyWageDiv = '<div class="monthlyWageDivClass" id="monthlyWageDivId' + value.labour_id + '"></div>';
                $('#' + hiddenDivId).append(monthlyWageDiv);


                var dailyWageDivId = "dailyWageDivId" + value.labour_id;
                $('#' + dailyWageDivId).append(labourChargeDetailsWithDropDown);
                var dailyWageSubmitDiv = '&nbsp;&nbsp;'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" id="datePickerIdForDailyWageSubmit' + value.labour_id + '">'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;<input class"cssDiv dailyWageSubmitDivClass" id="dailyWageSubmitDivId' + value.labour_id + '" type="number" value="0" onkeyup="calculateTotalDailyWage(' + value.labour_id + ')">'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="wageDetailsSubmitButton" onclick="submitDailyWageDetails(' + value.labour_id + ')">Submit</button>'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="showTotalDepositAmountForDailyWageSpan' + value.labour_id + '"></span>';
                $('#' + dailyWageDivId).append(dailyWageSubmitDiv);

                var monthlyWageDivId = "monthlyWageDivId" + value.labour_id;
//                $('#' + monthlyWageDivId).append(labourChargeDetailsWithDropDown);
                var monthlyWageSubmitDiv = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                        + '<span>Monthly Wage : </span><input class"cssDiv monthlyWageSubmitDivClass" id="monthlyWageSubmitDivId' + value.labour_id + '" type="number" value="0">'
                        + '&nbsp;&nbsp;<span>Working Day : </span><input class"cssDiv monthlyWageSubmitDivClass" id="monthlyWageWorkingDaySubmitDivId' + value.labour_id + '" type="number" value="0">'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" id="datePickerIdForMonthlyWageSubmit' + value.labour_id + '">'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class="wageDetailsSubmitButton" onclick="submitMonthlyWageDetails(' + value.labour_id + ')">Submit</button>';
                $('#' + monthlyWageDivId).append(monthlyWageSubmitDiv);


            });
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}

function goToContractorPage() {
//    $.ajax({
//        type: "GET",
//        url: 'goToContractorPage',
//        cache: false,
////        success: function (data) {
////        },
//        error: function (data) {
//            console.log("Error Happen");
//        }
//    });
}
function deleteLabourByIdConfirm() {
    var labourIdForDelete = document.getElementById("labourForDeleteId").value;
//    alert(labourIdForDelete);
    $.ajax({
        type: "POST",
        url: 'deleteExistingLabourById',
        cache: false,
        data: {
            labourId: labourIdForDelete
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
function deleteLabourById(dynamicId, labourName) {
//    alert(dynamicId);
//    alert(labourName);
    $("#labourForDeleteId").val(dynamicId);
    $("#dynamicLabourNameforDelete").empty();
    $("#dynamicLabourNameforDelete").text(labourName);
    $('#deleteLabourModalId').modal('show');
}
function withDrawMoney(dynamicId) {
    var labourId = dynamicId;
    var direction = "Withdraw";
    var details = "Money has been withdrawed";
    var withdrawAmount = document.getElementById("withDrawMoneyId" + dynamicId).value;
    var withdrawDate = document.getElementById("datePickerIdForWithDrawMoney" + dynamicId).value;
//    alert(withdrawDate);
//    return;
    $.ajax({
        type: "POST",
        url: 'submitTransactionDetails',
        cache: false,
        dataType: "json",
        data: {
            labourId: labourId,
            totalAmount: withdrawAmount,
            direction: direction,
            details: details,
            transactionDate: withdrawDate
        },
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
function calculateTotalDailyWage(dynamicId) {
    var dailyWageAmount = document.getElementById("dailyWageSubmitDivId" + dynamicId).value;
    var labourChargeDropDown = document.getElementById("labourChargeDetailsDropDownId" + dynamicId);
    var labourChargeId = labourChargeDropDown.options[labourChargeDropDown.selectedIndex].value;
    var labourChargeAmountObj = JSON.parse(localStorage.getItem("labourChargeAmountObj"));
    var rate = labourChargeAmountObj[labourChargeId] / 100;
    var totalDepositAmount = (dailyWageAmount / 1000) * rate;
    var rupeesSign = '\u20B9';
    document.getElementById("showTotalDepositAmountForDailyWageSpan" + dynamicId).innerHTML = "Total deposit amount : " + rupeesSign + totalDepositAmount;
}
function submitMonthlyWageDetails(dynamicId) {
    var labourId = dynamicId;
    var monthlyWageAmount = document.getElementById("monthlyWageSubmitDivId" + dynamicId).value;
    var totalWorkingDay = document.getElementById("monthlyWageWorkingDaySubmitDivId" + dynamicId).value;
    var totalDepositAmount = (monthlyWageAmount / 30) * totalWorkingDay;
    var monthlyWageSubmitDate = document.getElementById("datePickerIdForMonthlyWageSubmit" + dynamicId).value;
    var labourRoleName = $("#labourRoleDropDownId" + dynamicId + " option:selected").html();
    var direction = "Deposit";
    var details = "Monthly wage for " + labourRoleName;
//    alert(totalDepositAmount);
    $.ajax({
        type: "POST",
        url: 'submitTransactionDetails',
        cache: false,
        dataType: "json",
        data: {
            labourId: labourId,
            totalAmount: totalDepositAmount,
            direction: direction,
            details: details,
            transactionDate: monthlyWageSubmitDate
        },
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
function submitDailyWageDetails(dynamicId) {
    var labourId = dynamicId;
    var dailyWageSubmitDate = document.getElementById("datePickerIdForDailyWageSubmit" + dynamicId).value;
    var dailyWageAmount = document.getElementById("dailyWageSubmitDivId" + dynamicId).value;
    var labourChargeDropDown = document.getElementById("labourChargeDetailsDropDownId" + dynamicId);
    var labourChargeId = labourChargeDropDown.options[labourChargeDropDown.selectedIndex].value;
    var labourChargeAmountObj = JSON.parse(localStorage.getItem("labourChargeAmountObj"));
    var rate = labourChargeAmountObj[labourChargeId] / 100;
    var totalDepositAmount = (dailyWageAmount / 1000) * rate;
    var labourRole = $("#labourRoleDropDownId" + dynamicId + " option:selected").html();
    var workType = $("#labourChargeDetailsDropDownId" + dynamicId + " option:selected").html();
    var direction = "Deposit";
    var details = "Daily wage details for " + labourRole + " and " + workType + " for " + dailyWageAmount + " pieces";
    $.ajax({
        type: "POST",
        url: 'submitTransactionDetails',
        cache: false,
        dataType: "json",
        data: {
            labourId: labourId,
            totalAmount: totalDepositAmount,
            direction: direction,
            details: details,
            transactionDate: dailyWageSubmitDate
        },
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
function getAllActiveContractorDetails() {
//    alert();
    $.ajax({
        type: "GET",
        url: 'ContractorList/getAllActiveContractorDetails',
        cache: false,
        dataType: "json",
        success: function (data) {

            $('#selectContractorId').find('option').remove();
            var contractorDropDown = document.getElementById("selectContractorId");
            var option1 = document.createElement("option");
            option1.text = "--Select--";
            contractorDropDown.add(option1);

            $('#selectContractorForAddLabourId').find('option').remove();
            var contractorDropDownForAddLabour = document.getElementById("selectContractorForAddLabourId");
            var option1 = document.createElement("option");
            option1.text = "--Select--";
            contractorDropDownForAddLabour.add(option1);


            $.each(data, function (index, value) {
                var option = document.createElement("option");
                option.text = value.contractor_name;
                option.value = value.contractor_id;
                contractorDropDown.add(option);

                var optionForAddLabour = document.createElement("option");
                optionForAddLabour.text = value.contractor_name;
                optionForAddLabour.value = value.contractor_id;
                contractorDropDownForAddLabour.add(optionForAddLabour);

            });

            if (localStorage.getItem("globalContractorId") != undefined && localStorage.getItem("globalContractorId") != null) {
                globalContractorId = localStorage.getItem("globalContractorId");
            } else {
                globalContractorId = 0;
            }
            $("#selectContractorId").val(globalContractorId).change();
        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}
$(document).ready(function () {
    getAllActiveContractorDetails();
    $('.addNewLabour').show();


});

function addNewLabour() {
    var addLabourName = document.getElementById("addLabourNameInputId").value;
    var contractorId = $("#selectContractorForAddLabourId option:selected").val();
    $.ajax({
        type: "POST",
        url: 'addNewLabour',
        cache: false,
        data: {
            labourName: addLabourName,
            contractorId: contractorId
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

