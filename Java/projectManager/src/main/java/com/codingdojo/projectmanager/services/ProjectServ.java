package com.codingdojo.projectmanager.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.repositories.ProjectRepo;

@Service
public class ProjectServ {
	@Autowired
	ProjectRepo projectRepo;
	
//	returns a list of projects that a user is not a part of
	public List<Project> findUnjoined(User user) {
		List<Project> projects = projectRepo.findAll();
		ArrayList<Project> result = new ArrayList<Project>();
		
		for(Project project : projects) {
			if(!project.getTeammates().contains(user) && project.getProjectLead() != user) {
				result.add(project);
			}
		}
		return result;
	}
	
	public Project create(Project p) {
		return projectRepo.save(p);
	}
	
	public Project find(Long id) {
		Optional<Project> project = projectRepo.findById(id);
		if (project.isPresent()) {
			return project.get();
		} else {
			return null;
		}
	}
	
	public Project update(Project p) {
		Project project = find(p.getId());
		if(project == null) {
			return project;
		} else {
			project.setDescription(p.getDescription());
			project.setDue(p.getDue());
			project.setTitle(p.getTitle());
			return projectRepo.save(project);
		}
	}
	
	public void delete(Long id) {
		projectRepo.deleteById(id);
	}
	
	public Project join(Long id, User user) {
		Project project = find(id);
		if(project == null) {
			return project;
		} else {
			project.getTeammates().add(user);
			return projectRepo.save(project);
		}
	}
	
	public Project leave(Long id, User user) {
		Project project = find(id);
		if (project == null) {
			return project;
		} else {
			project.getTeammates().remove(user);
			return projectRepo.save(project);
		}
	}
 }
