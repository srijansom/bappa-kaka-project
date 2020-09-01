/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.controller;

import com.mycompany.project.manager.LabourDetailsManager;
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
@RequestMapping(value = "/ContractorList")
public class ContractorController {

    private LabourDetailsManager labourDetailsManager;

    public LabourDetailsManager getLabourDetailsManager() {
        return labourDetailsManager;
    }

    public void setLabourDetailsManager(LabourDetailsManager labourDetailsManager) {
        this.labourDetailsManager = labourDetailsManager;
    }

    @RequestMapping(value = "/getAllActiveContractorDetails", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getAllActiveContractorDetails() {
        JSONArray returnArray = labourDetailsManager.getAllActiveContractorDetails();
        return returnArray.toString();
    }

    @RequestMapping(value = "/deleteContractorById", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String deleteContractorById(
            @RequestParam String contractorId
    ) {
        JSONObject returnObj = labourDetailsManager.deleteContractorById(contractorId);
        return returnObj.toString();
    }

    @RequestMapping(value = "/addNewContractor", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String addNewContractor(
            @RequestParam String contractorName
    ) {
        JSONObject returnObj = labourDetailsManager.addNewContractor(contractorName);
        return returnObj.toString();
    }
}
