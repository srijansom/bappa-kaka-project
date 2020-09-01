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
    if (wageTypeId != undefined && wageTypeId != null && wageTypeId == 2) {
        $('#dailyWageDivId' + dynamicLabourDropDownId.substring(dynamicLabourDropDownId.length - 1, dynamicLabourDropDownId.length)).hide();
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
    $("#" + hiddenDiv).css("visibility", "visible");
    getlabourWageType(dynamicWageDropDownId, hiddenDiv);
}
function getAllActiveLabourDetails() {
//    alert();
    $.ajax({
        type: "GET",
        url: 'getAllActiveLabourDetails',
        cache: false,
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, value) {
                var dynamic_div = "<div class='dyanmicLabourClass' id='dyanmicLabourID" + value.labour_id + "'>";
                dynamic_div += '<span>Name : </span>&nbsp;'
                dynamic_div += '<span onclick="view(' + "'" + "wageDropDownId" + value.labour_id + "'" + ',' + "'"
                        + "hiddenDiv" + value.labour_id + "'" + ')"><b>' + value.labour_name + '</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                dynamic_div += '<span>Khoraki : </span>&nbsp;'
                dynamic_div += '<span>&#8377;' + value.labour_khoraki + '</span><br><br>';
                dynamic_div += "</div>";
                var dynamic_hidden_div = '<div id="hiddenDiv' + value.labour_id + '" class="labouRoleAndWageSelectorClass" class="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>'

                var wageDropDown = '<select class="selectOptionBox cssDiv" id="wageDropDownId'
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
                        + '</td><td><span id="labourChargeAmountSpanId' + value.labour_id + '"></span></td></tr></tbody></table>';
                var dyanmicLabourID = "dyanmicLabourID" + value.labour_id;
                var hiddenDivId = "hiddenDiv" + value.labour_id;
                var dailyWageDiv = '<div class="dailyWageDivClass" id="dailyWageDivId' + value.labour_id + '"</div>';
                $('#containerDivId').append(dynamic_div);
                $('#' + dyanmicLabourID).append(dynamic_hidden_div);
                $('#' + hiddenDivId).append(wageDropDown);
                $('#' + hiddenDivId).append(labourRoleDropDown);
                $('#' + hiddenDivId).append(dailyWageDiv);


                var dailyWageDivId = "dailyWageDivId" + value.labour_id;
                $('#' + dailyWageDivId).append(labourChargeDetailsWithDropDown);
                var dailyWageSubmitDiv = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                        + '<input class"cssDiv dailyWageSubmitDivClass" id="dailyWageSubmitDivId' + value.labour_id + '" type="number" value="0" onkeyup="calculateTotalDailyWage(' + value.labour_id + ')">'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="submitDailyWageDetails(' + value.labour_id + ')">Submit</button>'
                        + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id="showTotalDepositAmountForDailyWageSpan' + value.labour_id + '"></span>';
                $('#' + dailyWageDivId).append(dailyWageSubmitDiv);
            });
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
function submitDailyWageDetails(dynamicId) {
    var labourId = dynamicId;
    var dailyWageAmount = document.getElementById("dailyWageSubmitDivId" + dynamicId).value;
    var labourChargeDropDown = document.getElementById("labourChargeDetailsDropDownId" + dynamicId);
    var labourChargeId = labourChargeDropDown.options[labourChargeDropDown.selectedIndex].value;
    var labourChargeAmountObj = JSON.parse(localStorage.getItem("labourChargeAmountObj"));
    var rate = labourChargeAmountObj[labourChargeId] / 100;
    var totalDepositAmount = (dailyWageAmount / 1000) * rate;
    alert(totalDepositAmount)
    $.ajax({
        type: "POST",
        url: 'submitDailyWageDetails',
        cache: false,
        dataType: "json",
        data: {
            labourId: labourId,
            totalDepositAmount: totalDepositAmount
        },
        success: function (data) {

        },
        error: function (data) {
            console.log("Error Happen");
        }
    });
}

$(document).ready(function () {
    getAllActiveLabourDetails();
    $('.addNewLabour').show();


});



