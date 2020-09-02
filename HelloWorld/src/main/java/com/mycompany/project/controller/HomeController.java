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
@RequestMapping(value = "/")
public class HomeController {

    private LabourDetailsManager labourDetailsManager;

    public LabourDetailsManager getLabourDetailsManager() {
        return labourDetailsManager;
    }

    public void setLabourDetailsManager(LabourDetailsManager labourDetailsManager) {
        this.labourDetailsManager = labourDetailsManager;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String redirectHomePage(HttpServletRequest request, HttpServletResponse response) {
        return "redirect:index";
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String loadHomePage(HttpServletRequest request, HttpServletResponse response) {
        return "labour_payment_details";
    }

    @RequestMapping(value = "/LabourCharge", method = RequestMethod.GET)
    public String loadLabourChargeDetails(HttpServletRequest request, HttpServletResponse response) {
        return "labour_charge_details";
    }

    @RequestMapping(value = "/ContractorList", method = RequestMethod.GET)
    public String getContractorListPage(HttpServletRequest request, HttpServletResponse response) {
        return "contractor_details";
    }

    @RequestMapping(value = "/getlabourWageType", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getLabourWageType() {
        JSONArray returnArray = labourDetailsManager.getLabourWageType();
        return returnArray.toString();
    }

    @RequestMapping(value = "/getLabourRoleBasedOnWageType", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getLabourRoleBasedOnWageType(
            @RequestParam String wageTypeId) {
        if (wageTypeId != null && !wageTypeId.trim().equalsIgnoreCase("")) {
            JSONArray returnArray = labourDetailsManager.getLabourRoleBasedOnWageType(Integer.parseInt(wageTypeId));
            return returnArray.toString();
        } else {
            return null;
        }

    }

    @RequestMapping(value = "/getAllLabourDetailsBasedOnLabourRole", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getAllLabourDetailsBasedOnLabourRole(
            @RequestParam String labourRoleId) {
        if (labourRoleId != null && !labourRoleId.trim().equalsIgnoreCase("")) {
            JSONArray returnArray = labourDetailsManager.getAllLabourDetailsBasedOnLabourRole(Integer.parseInt(labourRoleId));
            return returnArray.toString();
        } else {
            return null;
        }

    }

    @RequestMapping(value = "/getAllActiveLabourDetailsByContractorId", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getAllActiveLabourDetailsByContractorId(@RequestParam String contractorId) {
        JSONArray returnArray = labourDetailsManager.getAllActiveLabourDetailsByContractorId(contractorId);
        return returnArray.toString();
    }

    @RequestMapping(value = "/getAllLabourChargeDetails", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getAllLabourChargeDetails() {
        JSONArray returnArray = labourDetailsManager.getAllLabourChargeDetails();
        return returnArray.toString();
    }

    @RequestMapping(value = "/transactionDetails", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String submitWageDetails(
            @RequestParam String labourId,
            @RequestParam String totalAmount,
            @RequestParam String direction,
            @RequestParam String details
    ) {
        JSONObject returnObj = labourDetailsManager.submitWageDetails(labourId, totalAmount, direction, details);
        return returnObj.toString();
    }

    @RequestMapping(value = "/addNewLabour", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String addNewLabour(
            @RequestParam String labourName,
            @RequestParam String contractorId
    ) {
        JSONObject returnObj = labourDetailsManager.addNewLabour(labourName, contractorId);
        return returnObj.toString();
    }
}
