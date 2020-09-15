/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.controller;

import com.mycompany.project.manager.LabourDetailsManager;
import org.json.simple.JSONArray;
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
@RequestMapping(value = "/TransactionDetails")
public class TransactionDetailsController {

    private LabourDetailsManager labourDetailsManager;

    public LabourDetailsManager getLabourDetailsManager() {
        return labourDetailsManager;
    }

    public void setLabourDetailsManager(LabourDetailsManager labourDetailsManager) {
        this.labourDetailsManager = labourDetailsManager;
    }

    @RequestMapping(value = "/getIndividualLabourTransactionDetails", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.OK)
    public String getIndividualLabourTransactionDetailsByLabourId(
            @RequestParam String labourId) {
        JSONArray returnArray = labourDetailsManager.getIndividualLabourTransactionDetailsByLabourId(labourId);
        return returnArray.toString();
    }
}
