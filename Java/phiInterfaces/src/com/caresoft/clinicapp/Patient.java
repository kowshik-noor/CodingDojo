package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class Patient extends User implements PHICompliantUser {
    
    private String firstName;
    private String lastName;
    // .. other personal identifying information .. //
    
    Physician primaryCarePhysician;
    ArrayList<Integer> currentPrescriptionsByRX;
    int providerCode;
    int memberNumber;
    PatientRecord medicalHistory;
    
    
//    Constructor
    public Patient() {
		super();
	}


	public Patient(String firstName, String lastName, Physician primaryCarePhysician,
			ArrayList<Integer> currentPrescriptionsByRX, int providerCode, int memberNumber,
			PatientRecord medicalHistory) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.primaryCarePhysician = primaryCarePhysician;
		this.currentPrescriptionsByRX = currentPrescriptionsByRX;
		this.providerCode = providerCode;
		this.memberNumber = memberNumber;
		this.medicalHistory = medicalHistory;
	}
    
    
    public boolean requestAppointment(Date date, Physician doctor) {
        boolean successfullyAdded = false;
        // you see existing code to find and schedule an appointment
    	// (Leave as is for the assignment, no need to implement anything here.)
        return successfullyAdded;
    }
    void addChartNotes(String notes) {
        this.medicalHistory.getCharts().add(notes);
    }
    
    // TO DO: Setters & Getters
    public String getFirstName() {
    	return firstName;
    }
    public void setFirstName(String firstName) {
    	this.firstName = firstName;
    }
    public String getLastName() {
    	return lastName;
    }
    public void setLastName(String lastName) {
    	this.lastName = lastName;
    }
    public Physician getPrimaryCarePhysician() {
    	return primaryCarePhysician;
    }
    public void setPrimaryCarePhysician(Physician primaryCarePhysician) {
    	this.primaryCarePhysician = primaryCarePhysician;
    }
    public ArrayList<Integer> getCurrentPrescriptionsByRX() {
    	return currentPrescriptionsByRX;
    }
    public void setCurrentPrescriptionsByRX(ArrayList<Integer> currentPrescriptionsByRX) {
    	this.currentPrescriptionsByRX = currentPrescriptionsByRX;
    }
    public int getProviderCode() {
    	return providerCode;
    }
    public void setProviderCode(int providerCode) {
    	this.providerCode = providerCode;
    }
    public int getMemberNumber() {
    	return memberNumber;
    }
    public void setMemberNumber(int memberNumber) {
    	this.memberNumber = memberNumber;
    }
    public PatientRecord getMedicalHistory() {
    	return medicalHistory;
    }
    public void setMedicalHistory(PatientRecord medicalHistory) {
    	this.medicalHistory = medicalHistory;
    }
    
    
    
	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		if (pin != 1234 || pin != 4321 && pin > 999 && pin < 10000) {
			this.pin = pin;
			return true;
		} else {
			return false;
		}
	}

	@Override
	public boolean isAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		return confirmedAuthID == this.id;
	}
}
