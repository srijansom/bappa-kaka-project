/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.project.dao;

import com.mycompany.project.pojo.LabourChargeLookup;
import com.mycompany.project.pojo.LabourRoleLookup;
import com.mycompany.project.pojo.LabourTransactionDetails;
import com.mycompany.project.pojo.LabourWageTypeLookup;
import com.mycompany.project.pojo.Registration;
import com.mycompany.project.util.HibernateUtil;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;

/**
 *
 * @author srija
 */
@Component
public class LabourDetailsDAOImpl implements LabourDetailsDAO {

    HibernateUtil hibernateUtil;

    public HibernateUtil getHibernateUtil() {
        return hibernateUtil;
    }

    public void setHibernateUtil(HibernateUtil hibernateUtil) {
        this.hibernateUtil = hibernateUtil;
    }

    public JSONArray getLabourWageType() {
        JSONArray returnArr = new JSONArray();
        Session session = null;
        try {
            session = hibernateUtil.openSession();
            Criteria cr = session.createCriteria(LabourWageTypeLookup.class);
            List<LabourWageTypeLookup> resultList = cr.list();
            for (LabourWageTypeLookup labourWageTypeLookup : resultList) {
                try {
                    JSONObject tempObj = new JSONObject();
                    tempObj.put("id", labourWageTypeLookup.getLabourWageTypeLookupId());
                    tempObj.put("name", labourWageTypeLookup.getLabourWageTypeName());
                    returnArr.add(tempObj);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnArr;
    }

    public JSONArray getLabourRoleBasedOnWageType(int wageTypeId) {
        JSONArray returnArr = new JSONArray();
        Session session = null;
        try {
            session = hibernateUtil.openSession();
            Criteria cr = session.createCriteria(LabourRoleLookup.class);
//            cr.addOrder(Order.desc("labourRoleLookupId"));
            cr.add(Restrictions.eq("labourWageTypeLookupId", wageTypeId));
            List<LabourRoleLookup> resultList = cr.list();
            for (LabourRoleLookup labourRoleLookup : resultList) {
                try {
                    JSONObject tempObj = new JSONObject();
                    tempObj.put("id", labourRoleLookup.getLabourRoleLookupId());
                    tempObj.put("name", labourRoleLookup.getLabourRoleName());
                    returnArr.add(tempObj);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnArr;
    }

    public JSONArray getAllLabourDetailsBasedOnLabourRole(int labourRoleId) {
        JSONArray returnArr = new JSONArray();
        Session session = null;
        try {
            session = hibernateUtil.openSession();
            String hql = "select reg.regId,reg.name,reg.khoraki from Registration reg,LabourRoleMapping rolemap "
                    + "where rolemap.registrationId=reg.regId and reg.isActive='Y' and rolemap.labourRoleLookupId = :labourRoleId";
            Query query = session.createQuery(hql)
                    .setInteger("labourRoleId", labourRoleId);
            List resultList = query.list();
            for (int i = 0; i < resultList.size(); i++) {
                try {
                    Object objArr[] = (Object[]) resultList.get(i);
                    JSONObject tempObj = new JSONObject();
                    tempObj.put("id", objArr[0]);
                    tempObj.put("name", objArr[1]);
                    returnArr.add(tempObj);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnArr;
    }

    public JSONArray getAllLabourChargeDetails() {
        JSONArray returnArr = new JSONArray();
        Session session = null;
        try {
            session = hibernateUtil.openSession();
            Criteria cr = session.createCriteria(LabourChargeLookup.class);
//            cr.addOrder(Order.desc("regId"));
            cr.add(Restrictions.eq("isActive", "Y"));
            List<LabourChargeLookup> resultList = cr.list();
            for (LabourChargeLookup labourCharge : resultList) {
                try {
                    JSONObject tempObj = new JSONObject();
                    tempObj.put("labour_charge_id", labourCharge.getLabourChargeLookupId());
                    tempObj.put("labour_charge_name", labourCharge.getLabourChargeName());
                    tempObj.put("labour_charge_amount", labourCharge.getLabourChargeAmount());
                    returnArr.add(tempObj);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnArr;
    }

    public JSONArray getAllActiveLabourDetails() {
        JSONArray returnArr = new JSONArray();
        Session session = null;
        try {
            session = hibernateUtil.openSession();
            Criteria cr = session.createCriteria(Registration.class);
            cr.addOrder(Order.desc("regId"));
            cr.add(Restrictions.eq("isActive", "Y"));
            List<Registration> resultList = cr.list();
            for (Registration registration : resultList) {
                try {
                    JSONObject tempObj = new JSONObject();
                    tempObj.put("labour_id", registration.getRegId());
                    tempObj.put("labour_name", registration.getName());
                    tempObj.put("labour_khoraki", registration.getKhoraki());
                    returnArr.add(tempObj);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnArr;
    }

    public JSONObject updateLoabourCharge(String updatedLabourCharge, String labourChargeId) {
        Session session = null;
        JSONObject returnObj = new JSONObject();
        boolean status = false;
        try {
            session = hibernateUtil.openSession();
            Transaction tx = session.beginTransaction();
            String hql = "update LabourChargeLookup labourChargeLookup set labourChargeLookup.labourChargeAmount= :updatedLabourCharge "
                    + "where labourChargeLookup.labourChargeLookupId= :labourChargeId";
            session.createQuery(hql)
                    .setInteger("updatedLabourCharge", Integer.parseInt(updatedLabourCharge))
                    .setInteger("labourChargeId", Integer.parseInt(labourChargeId))
                    .executeUpdate();
            tx.commit();
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            returnObj.put("status", status);
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnObj;
    }

    public JSONObject deleteExistingLabourCharge(String labourChargeId) {
        Session session = null;
        JSONObject returnObj = new JSONObject();
        boolean status = false;
        try {
            session = hibernateUtil.openSession();
            Transaction tx = session.beginTransaction();
            String hql = "update LabourChargeLookup labourChargeLookup set labourChargeLookup.isActive= 'N' "
                    + "where labourChargeLookup.labourChargeLookupId= :labourChargeId";
            session.createQuery(hql)
                    .setInteger("labourChargeId", Integer.parseInt(labourChargeId))
                    .executeUpdate();
            tx.commit();
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            returnObj.put("status", status);
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnObj;
    }

    public JSONObject addNewLabourCharge(String addLabourChargeName, String addLabourChargeRate) {
        Session session = null;
        JSONObject returnObj = new JSONObject();
        boolean status = false;
        try {
            LabourChargeLookup labourChargeLookup = new LabourChargeLookup();
            labourChargeLookup.setIsActive("Y");
            labourChargeLookup.setLabourChargeAmount(Integer.parseInt(addLabourChargeRate) * 100);
            labourChargeLookup.setLabourChargeName(addLabourChargeName);
            session = hibernateUtil.openSession();
            session.beginTransaction();
            session.save(labourChargeLookup);
            session.getTransaction().commit();
            status = true;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            returnObj.put("status", status);
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnObj;
    }

    public JSONObject submitDailyWageDetails(String labourId, String totalDepositAmount) {
        Session session = null;
        JSONObject returnObj = new JSONObject();
        boolean status = false;
        try {
            LabourTransactionDetails labourTransactionDetails = new LabourTransactionDetails();
            labourTransactionDetails.setTransactionDateTime(new Date());
            labourTransactionDetails.setRegId(Integer.parseInt(labourId));
            labourTransactionDetails.setLabourTransactionAmount(new BigDecimal(totalDepositAmount));
            labourTransactionDetails.setLabourTransactionDirection("Deposit");
            labourTransactionDetails.setLabourTransactionDetails("Deposit on behalf of daily wage");
            session = hibernateUtil.openSession();
            session.beginTransaction();
            session.save(labourTransactionDetails);
            session.getTransaction().commit();
            status = updateKhorakiDeatils(labourId, totalDepositAmount);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            returnObj.put("status", status);
            if (session.isOpen()) {
                session.close();
            }
        }
        return returnObj;
    }

    public boolean updateKhorakiDeatils(String labourId, String totalDepositAmount) {
        boolean status = false;
        Session session = null;
        try {

        } catch (Exception e) {
            e.printStackTrace();
        }finally{
            
        }
        return status;
    }

}