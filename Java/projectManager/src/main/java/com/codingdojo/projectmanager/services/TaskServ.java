package com.codingdojo.projectmanager.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.Task;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.repositories.TaskRepo;

@Service
public class TaskServ {
	@Autowired
	TaskRepo taskRepo;
	
	public Task addTask(Task t, User u, Project p) {
		t.setProject(p);
		t.setUser(u);
		return taskRepo.save(t);
	}
	
	public List<Task> findAll(Project project) {
		return taskRepo.findByProject(project);
	}
}
