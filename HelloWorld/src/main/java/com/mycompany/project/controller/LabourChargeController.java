/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.controller;

import com.mycompany.project.manager.LabourDetailsManager;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 *
 * @author srija
 */
@Controller
@RequestMapping(value = "/LabourCharge")
public class LabourChargeController {

    private LabourDetailsManager labourDetailsManager;

    public LabourDetailsManager getLabourDetailsManager() {
        return labourDetailsManager;
    }

    public void setLabourDetailsManager(LabourDetailsManager labourDetailsManager) {
        this.labourDetailsManager = labourDetailsManager;
    }

    @RequestMapping(value = "/getAllLabourChargeDetails", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getAllLabourChargeDetails() {
        JSONArray returnArray = labourDetailsManager.getAllLabourChargeDetails();
        return returnArray.toString();
    }

    @RequestMapping(value = "/updateLoabourCharge", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String updateLoabourCharge(
            @RequestParam String updatedLabourCharge,
            @RequestParam String labourChargeId
    ) {
        JSONObject returnObj = labourDetailsManager.updateLoabourCharge(updatedLabourCharge, labourChargeId);
        return returnObj.toString();
    }
    
    @RequestMapping(value = "/deleteExistingLabourCharge", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String deleteExistingLabourCharge(
            @RequestParam String labourChargeId
    ) {
        JSONObject returnObj = labourDetailsManager.deleteExistingLabourCharge(labourChargeId);
        return returnObj.toString();
    }
    @RequestMapping(value = "/addNewLabourCharge", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String addNewLabourCharge(
            @RequestParam String addLabourChargeName,
            @RequestParam String addLabourChargeRate
    ) {
        JSONObject returnObj = labourDetailsManager.addNewLabourCharge(addLabourChargeName, addLabourChargeRate);
        return returnObj.toString();
    }
}
