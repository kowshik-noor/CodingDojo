package com.codingdojo.projectmanager.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.Task;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.services.ProjectServ;
import com.codingdojo.projectmanager.services.TaskServ;
import com.codingdojo.projectmanager.services.UserServ;

@Controller
@RequestMapping("/projects/{id}/tasks")
public class TaskController {
	@Autowired
	ProjectServ projectServ;
	@Autowired
	UserServ userServ;
	@Autowired
	TaskServ taskServ;
	
	@GetMapping("")
	public String tasks(@ModelAttribute("task") Task task, @PathVariable("id") Long id, HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		Project project = projectServ.find(id);
		List<Task> tasks = taskServ.findAll(project);
		model.addAttribute("project", project);
		model.addAttribute("tasks", tasks);
		
		return "tasks";
	}
	
	@PostMapping("")
	public String makeTask(@Valid @ModelAttribute("task") Task task, BindingResult result,@PathVariable("id") Long id, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		if(result.hasErrors()) {
			return "tasks";
		} else {
			User user = userServ.find(userId);
			Project project = projectServ.find(id);
			taskServ.addTask(task, user, project);
			return "redirect:/projects/" + id + "/tasks";
		}
	}
}
