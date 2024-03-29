package com.mycompany.project.pojo;
// Generated 1 Sep, 2020 11:19:55 PM by Hibernate Tools 4.3.1


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * LabourPaymentDetails generated by hbm2java
 */
@Entity
@Table(name="labour_payment_details"
    ,catalog="project"
)
public class LabourPaymentDetails  implements java.io.Serializable {


     private int labourPaymentDetailsId;
     private Integer regId;
     private Integer labourChargeLookupId;
     private Integer workCount;
     private Date createdDatetime;
     private Date updatedDatetime;

    public LabourPaymentDetails() {
    }

	
    public LabourPaymentDetails(int labourPaymentDetailsId) {
        this.labourPaymentDetailsId = labourPaymentDetailsId;
    }
    public LabourPaymentDetails(int labourPaymentDetailsId, Integer regId, Integer labourChargeLookupId, Integer workCount, Date createdDatetime, Date updatedDatetime) {
       this.labourPaymentDetailsId = labourPaymentDetailsId;
       this.regId = regId;
       this.labourChargeLookupId = labourChargeLookupId;
       this.workCount = workCount;
       this.createdDatetime = createdDatetime;
       this.updatedDatetime = updatedDatetime;
    }
   
     @Id 

    
    @Column(name="labour_payment_details_id", unique=true, nullable=false)
    public int getLabourPaymentDetailsId() {
        return this.labourPaymentDetailsId;
    }
    
    public void setLabourPaymentDetailsId(int labourPaymentDetailsId) {
        this.labourPaymentDetailsId = labourPaymentDetailsId;
    }

    
    @Column(name="reg_id")
    public Integer getRegId() {
        return this.regId;
    }
    
    public void setRegId(Integer regId) {
        this.regId = regId;
    }

    
    @Column(name="labour_charge_lookup_id")
    public Integer getLabourChargeLookupId() {
        return this.labourChargeLookupId;
    }
    
    public void setLabourChargeLookupId(Integer labourChargeLookupId) {
        this.labourChargeLookupId = labourChargeLookupId;
    }

    
    @Column(name="work_count")
    public Integer getWorkCount() {
        return this.workCount;
    }
    
    public void setWorkCount(Integer workCount) {
        this.workCount = workCount;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_datetime", length=19)
    public Date getCreatedDatetime() {
        return this.createdDatetime;
    }
    
    public void setCreatedDatetime(Date createdDatetime) {
        this.createdDatetime = createdDatetime;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="updated_datetime", length=19)
    public Date getUpdatedDatetime() {
        return this.updatedDatetime;
    }
    
    public void setUpdatedDatetime(Date updatedDatetime) {
        this.updatedDatetime = updatedDatetime;
    }




}


