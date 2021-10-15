package com.codingdojo.projectmanager.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.Task;

public interface TaskRepo extends CrudRepository<Task, Long> {
	public List<Task> findByProject(Project project);
}
