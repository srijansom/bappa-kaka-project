<%-- 
    Document   : individual_labour_transaction_details
    Created on : 6 Sep, 2020, 10:53:41 AM
    Author     : srija
--%>

<%@page contentType="text/html" pageEncoding="windows-1252"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
        <title>JSP Page</title>
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
        <!--Add PDFMake from local-->
        <script src="resources/Import/PDFMake/pdfmake.min.js" type="text/javascript"></script>
        <script src="resources/Import/PDFMake/vfs_fonts.js" type="text/javascript"></script>
        <script src="resources/js/individual_labour_transaction_details.js" type="text/javascript"></script>
        <link href="resources/css/labour_charge_details.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <jsp:include page="top-header.jsp"/>
        <jsp:include page="side-header.jsp"/>

        <div class="" style="margin-top: 80px;margin-left: 80px;">
            <table id="transactionTableId" class="table-bordered table">
                <thead>
                <th>Details</th>
                <th>Amount (&#8377;)</th>
                <th>Time</th>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </body>
</html>
