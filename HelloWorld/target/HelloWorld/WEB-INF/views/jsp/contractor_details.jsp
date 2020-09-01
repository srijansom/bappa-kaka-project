<%-- 
    Document   : contractor_details
    Created on : 2 Sep, 2020, 12:24:50 AM
    Author     : srija
--%>

<%@page contentType="text/html" pageEncoding="windows-1252"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.js"></script>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/jquery-ui.min.js"></script>
        <link rel="stylesheet" type="text/css" media="screen" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.14/themes/base/jquery-ui.css">

        <script src="resources/js/contractor_details.js" type="text/javascript"></script>
        <link href="resources/css/contractor_details.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <jsp:include page="top-header.jsp"/>
        <jsp:include page="side-header.jsp"/>
        <div class="" style="margin-top: 80px;margin-left: 80px;">
            <div id="containerDivId" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <table class="table table-bordered" id="contractorDetailsTableId" style="width: 25vw">
                    <thead>
                        <tr>
                            <th>Contractor Name</th>
                        </tr>
                    </thead>
                </table>
                <div class="modal fade" id="addNewContractor" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <table class="table table-bordered" id="addNewContractorTable" style="border-collapse: collapse">
                                    <tr>
                                        <td><label>Contractor Name</label></td>
                                        <td><input type="text" id="addContractorNameInputId"></td>
                                    </tr>
                                </table>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" onclick="addNewContractor()">Save</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
