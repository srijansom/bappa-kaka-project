package com.mycompany.project.pojo;
// Generated 1 Sep, 2020 1:53:15 PM by Hibernate Tools 4.3.1


import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * LabourTransactionDetails generated by hbm2java
 */
@Entity
@Table(name="labour_transaction_details"
    ,catalog="project"
)
public class LabourTransactionDetails  implements java.io.Serializable {


     private int labourTransactionDetailsId;
     private BigDecimal labourTransactionAmount;
     private String labourTransactionDirection;
     private String labourTransactionDetails;
     private Integer regId;
     private Date transactionDateTime;

    public LabourTransactionDetails() {
    }

	
    public LabourTransactionDetails(int labourTransactionDetailsId, BigDecimal labourTransactionAmount) {
        this.labourTransactionDetailsId = labourTransactionDetailsId;
        this.labourTransactionAmount = labourTransactionAmount;
    }
    public LabourTransactionDetails(int labourTransactionDetailsId, BigDecimal labourTransactionAmount, String labourTransactionDirection, String labourTransactionDetails, Integer regId, Date transactionDateTime) {
       this.labourTransactionDetailsId = labourTransactionDetailsId;
       this.labourTransactionAmount = labourTransactionAmount;
       this.labourTransactionDirection = labourTransactionDirection;
       this.labourTransactionDetails = labourTransactionDetails;
       this.regId = regId;
       this.transactionDateTime = transactionDateTime;
    }
   
     @Id 

    
    @Column(name="labour_transaction_details_id", unique=true, nullable=false)
    public int getLabourTransactionDetailsId() {
        return this.labourTransactionDetailsId;
    }
    
    public void setLabourTransactionDetailsId(int labourTransactionDetailsId) {
        this.labourTransactionDetailsId = labourTransactionDetailsId;
    }

    
    @Column(name="labour_transaction_amount", nullable=false, precision=10)
    public BigDecimal getLabourTransactionAmount() {
        return this.labourTransactionAmount;
    }
    
    public void setLabourTransactionAmount(BigDecimal labourTransactionAmount) {
        this.labourTransactionAmount = labourTransactionAmount;
    }

    
    @Column(name="labour_transaction_direction", length=45)
    public String getLabourTransactionDirection() {
        return this.labourTransactionDirection;
    }
    
    public void setLabourTransactionDirection(String labourTransactionDirection) {
        this.labourTransactionDirection = labourTransactionDirection;
    }

    
    @Column(name="labour_transaction_details", length=100)
    public String getLabourTransactionDetails() {
        return this.labourTransactionDetails;
    }
    
    public void setLabourTransactionDetails(String labourTransactionDetails) {
        this.labourTransactionDetails = labourTransactionDetails;
    }

    
    @Column(name="reg_id")
    public Integer getRegId() {
        return this.regId;
    }
    
    public void setRegId(Integer regId) {
        this.regId = regId;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="transaction_date_time", length=19)
    public Date getTransactionDateTime() {
        return this.transactionDateTime;
    }
    
    public void setTransactionDateTime(Date transactionDateTime) {
        this.transactionDateTime = transactionDateTime;
    }




}

