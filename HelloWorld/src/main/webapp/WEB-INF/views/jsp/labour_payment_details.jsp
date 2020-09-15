<%-- 
    Document   : labour_charge_details
    Created on : 19 Jun, 2020, 11:36:42 PM
    Author     : srija
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!--Add Jquery 3.5.1 from local-->
        <script src="resources/Import/Jquery 3.5.1/jquery-3.5.1.min.js" type="text/javascript"></script>
        
        <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>-->
        <!--Add SweetAlert from local-->
        <script src="resources/Import/SweetAlert/sweetalert.min.js" type="text/javascript"></script>
        <!--Add Bootstrap from local-->
        <script src="resources/Import/Bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <link href="resources/Import/Bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <!--Add FontAwesome from local-->
        <link href="resources/Import/font-awesome-4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <!--Add Jquery UI from local-->
        <script src="resources/Import/Jquery UI/jquery-ui-1.8.14/ui/minified/jquery-ui.min.js" type="text/javascript"></script>
        <link href="resources/Import/Jquery UI/jquery-ui-1.8.14/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>


        <script src="resources/js/labour_payment_details.js" type="text/javascript"></script>
        <link href="resources/css/labour_payment_details.css" rel="stylesheet" type="text/css"/>
        <title>JSP Page</title>
    </head>
    <body>
        <jsp:include page="top-header.jsp"/>
        <jsp:include page="side-header.jsp"/>

        <div class="" style="margin-top: 80px;margin-left: 80px;">

            <div class="selectContractorDivClass" style="margin-top: 45px;text-align: center;">
                <select id="selectContractorId" class="selectContractorClass" onchange="getAllActiveLabourDetailsByContractorId()">
                </select>
                &nbsp;&nbsp;&nbsp;<a href="/HelloWorld/ContractorList"><i style="cursor: pointer" class="fa fa-external-link" aria-hidden="true">
                    </i></a>
            </div>
            <div id="containerDivId" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            </div>

            <div class="modal fade" id="addNewLabour" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <table class="table table-bordered" id="addNewLabourTable" style="border-collapse: collapse">
                                <tr>
                                    <td><label>Labour Name</label></td>
                                    <td><input type="text" id="addLabourNameInputId"></td>
                                </tr>
                                <tr>
                                    <td><label>Contractor Name</label></td>
                                    <td><select id="selectContractorForAddLabourId" class="selectContractorForAddLabourClass" onchange="">
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onclick="addNewLabour()">Save</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="deleteLabourModalId" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <input type="hidden" id="labourForDeleteId" name="labourForDeleteId">
                            <h6>Are you want to delete <span id="dynamicLabourNameforDelete"></span> ?</h6>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onclick="deleteLabourByIdConfirm()">Confirm</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </body>
</html>
