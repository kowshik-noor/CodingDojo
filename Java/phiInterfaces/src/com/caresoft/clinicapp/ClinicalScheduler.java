package com.caresoft.clinicapp;

import java.util.ArrayList;

public class ClinicalScheduler implements PHIAdminCompliant{
    
    private ArrayList<AdminUser> adminUsers; 
    private HashSet<Physician> doctors;
    private ArrayList<Appointment> appointments;
    private ArrayList<String> ePHIBreaches; // this class's version of security incidents
    // TO DO: Constructor
    
    public void newIncident(Date incidentDate, Integer userID, String notes) {
        String report = String.format(
            "Datetime: %s \n,  Reported By Clinical Scheduler, User ID: %s\n %s \n", 
            incidentDate, userID, notes
        );
        ePHIBreaches.add(report);
    }
    
    public boolean bookAppointmentFor(Patient patient, Physician doctor, Date apptDate) {
        boolean success = false;
        // You see other code here 
    	// (no need to implement anything here for this assignment)
        return success;
    }
    
    public ArrayList<Appointment> openAppointmentsByPCP(Physician doctor, Date startRange, Date endRange){
        ArrayList<Appointment> openAppointments = new ArrayList<appointment>();
        // .. you see existing code to get appointment list.
    	// (Leave as is for the assignment, no need to implement anything here.)
        return openAppointments;
    }
    // TO-DO: add Setters and Getters
    
    
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		return null;
	
}

