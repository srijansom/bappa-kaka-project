/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.manager;

import com.mycompany.project.dao.LabourDetailsDAO;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;

/**
 *
 * @author srija
 */
@Component
public class LabourDetailsManagerImpl implements LabourDetailsManager {

    private LabourDetailsDAO labourDetailsDAO;

    public LabourDetailsDAO getLabourDetailsDAO() {
        return labourDetailsDAO;
    }

    public void setLabourDetailsDAO(LabourDetailsDAO labourDetailsDAO) {
        this.labourDetailsDAO = labourDetailsDAO;
    }

    public JSONArray getLabourWageType() {
        return labourDetailsDAO.getLabourWageType();
    }

    public JSONArray getLabourRoleBasedOnWageType(int wageTypeId) {
        return labourDetailsDAO.getLabourRoleBasedOnWageType(wageTypeId);
    }

    public JSONArray getAllLabourDetailsBasedOnLabourRole(int labourRoleId) {
        return labourDetailsDAO.getAllLabourDetailsBasedOnLabourRole(labourRoleId);
    }

    public JSONArray getAllActiveLabourDetailsByContractorId(String contractorId) {
        return labourDetailsDAO.getAllActiveLabourDetailsByContractorId(contractorId);
    }

    public JSONArray getAllLabourChargeDetails() {
        return labourDetailsDAO.getAllLabourChargeDetails();
    }

    public JSONObject updateLoabourCharge(String updatedLabourCharge, String labourChargeId) {
        return labourDetailsDAO.updateLoabourCharge(updatedLabourCharge, labourChargeId);
    }

    public JSONObject deleteExistingLabourCharge(String labourChargeId) {
        return labourDetailsDAO.deleteExistingLabourCharge(labourChargeId);
    }

    public JSONObject addNewLabourCharge(String addLabourChargeName, String addLabourChargeRate) {
        return labourDetailsDAO.addNewLabourCharge(addLabourChargeName, addLabourChargeRate);
    }

    public JSONObject submitWageDetails(String labourId, String totalDepositAmount, String direction, String details) {
        return labourDetailsDAO.submitWageDetails(labourId, totalDepositAmount, direction, details);
    }

    public JSONArray getAllActiveContractorDetails() {
        return labourDetailsDAO.getAllActiveContractorDetails();
    }

}
