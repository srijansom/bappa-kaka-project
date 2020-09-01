/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.manager;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 *
 * @author srija
 */
public interface LabourDetailsManager {

    public JSONArray getLabourWageType();

    public JSONArray getLabourRoleBasedOnWageType(int wageTypeId);

    public JSONArray getAllLabourDetailsBasedOnLabourRole(int parseInt);

    public JSONArray getAllActiveLabourDetailsByContractorId(String contractorId);

    public JSONArray getAllLabourChargeDetails();

    public JSONObject updateLoabourCharge(String updatedLabourCharge, String labourChargeId);

    public JSONObject deleteExistingLabourCharge(String labourChargeId);

    public JSONObject addNewLabourCharge(String addLabourChargeName, String addLabourChargeRate);

    public JSONObject submitWageDetails(String labourId, String totalDepositAmount, String direction, String details);

    public JSONArray getAllActiveContractorDetails();

}
