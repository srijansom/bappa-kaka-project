package com.mycompany.project.pojo;
// Generated 1 Sep, 2020 11:19:55 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * LabourRoleMapping generated by hbm2java
 */
@Entity
@Table(name="labour_role_mapping"
    ,catalog="project"
)
public class LabourRoleMapping  implements java.io.Serializable {


     private int labourRoleMappingId;
     private Integer registrationId;
     private Integer labourRoleLookupId;

    public LabourRoleMapping() {
    }

	
    public LabourRoleMapping(int labourRoleMappingId) {
        this.labourRoleMappingId = labourRoleMappingId;
    }
    public LabourRoleMapping(int labourRoleMappingId, Integer registrationId, Integer labourRoleLookupId) {
       this.labourRoleMappingId = labourRoleMappingId;
       this.registrationId = registrationId;
       this.labourRoleLookupId = labourRoleLookupId;
    }
   
     @Id 

    
    @Column(name="labour_role_mapping_id", unique=true, nullable=false)
    public int getLabourRoleMappingId() {
        return this.labourRoleMappingId;
    }
    
    public void setLabourRoleMappingId(int labourRoleMappingId) {
        this.labourRoleMappingId = labourRoleMappingId;
    }

    
    @Column(name="registration_id")
    public Integer getRegistrationId() {
        return this.registrationId;
    }
    
    public void setRegistrationId(Integer registrationId) {
        this.registrationId = registrationId;
    }

    
    @Column(name="labour_role_lookup_id")
    public Integer getLabourRoleLookupId() {
        return this.labourRoleLookupId;
    }
    
    public void setLabourRoleLookupId(Integer labourRoleLookupId) {
        this.labourRoleLookupId = labourRoleLookupId;
    }




}


