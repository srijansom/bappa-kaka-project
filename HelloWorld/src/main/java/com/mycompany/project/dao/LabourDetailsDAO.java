/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.dao;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 *
 * @author srija
 */
public interface LabourDetailsDAO {

    public JSONArray getLabourWageType();

    public JSONArray getLabourRoleBasedOnWageType(int wageTypeId);

    public JSONArray getAllLabourDetailsBasedOnLabourRole(int labourRoleId);

    public JSONArray getAllActiveLabourDetailsByContractorId(String contractorId);

    public JSONArray getAllLabourChargeDetails();

    public JSONObject updateLoabourCharge(String updatedLabourCharge, String labourChargeId);

    public JSONObject deleteExistingLabourCharge(String labourChargeId);

    public JSONObject addNewLabourCharge(String addLabourChargeName, String addLabourChargeRate);

    public JSONObject submitTransactionDetails(String labourId, String totalAmount, String direction, String details, String transactionDate);

    public JSONArray getAllActiveContractorDetails();

    public JSONObject deleteContractorById(String contractorId);

    public JSONObject addNewContractor(String contractorName);

    public JSONObject addNewLabour(String labourName, String contractorId);

    public JSONObject deleteExistingLabourById(String labourId);

}
