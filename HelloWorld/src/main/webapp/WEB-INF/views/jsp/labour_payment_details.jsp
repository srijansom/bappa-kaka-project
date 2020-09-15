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
        <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


        <!--<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.js"></script>-->
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
        <link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css">




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
