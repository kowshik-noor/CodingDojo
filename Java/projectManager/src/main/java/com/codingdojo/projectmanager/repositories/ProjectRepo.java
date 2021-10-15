package com.codingdojo.projectmanager.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.projectmanager.models.Project;

public interface ProjectRepo extends CrudRepository<Project, Long> {
	List<Project> findAll();
}