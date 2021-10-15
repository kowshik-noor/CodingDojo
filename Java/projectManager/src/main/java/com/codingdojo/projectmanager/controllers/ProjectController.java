package com.codingdojo.projectmanager.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.services.ProjectServ;
import com.codingdojo.projectmanager.services.UserServ;

@Controller
@RequestMapping("/projects")
public class ProjectController {
	@Autowired
	UserServ userServ;
	@Autowired
	ProjectServ projectServ;
	
	@GetMapping("/new")
	public String newPro(@ModelAttribute("project") Project project, HttpSession session) {
		Long id = (Long) session.getAttribute("user_id");
		if (id == null) {
			return "redirect:/";
		}
		
		return "newpro";
	}
	
	@PostMapping("")
	public String createPro(@Valid @ModelAttribute("project") Project project, BindingResult result , HttpSession session) {
		Long id = (Long) session.getAttribute("user_id");
		if (id == null) {
			return "redirect:/";
		}
		
		if(result.hasErrors()) {
			return "newpro";
		} else {
			User user = userServ.find(id);
			project.setProjectLead(user);
			projectServ.create(project);
			return "redirect:/dashboard";
		}
	}
	
	@GetMapping("{id}")
	public String showPro(@PathVariable("id") Long id, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		Project project = projectServ.find(id);
		model.addAttribute("project", project);
		
		return "showpro";
	}
	
	@GetMapping("{id}/edit")
	public String editPro(@PathVariable("id") Long id, Model model, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		Project project = projectServ.find(id);
		if(project.getProjectLead().getId().compareTo(userId) != 0) {
			return "redirect:/dashboard";
		}
		
		model.addAttribute("project", project);
		return "editpro";
	}
	
	@PutMapping("/{id}")
	public String updatePro(@Valid
			@ModelAttribute("project") Project project,
			BindingResult result,
			HttpSession session, @PathVariable("id") Long id) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		if(projectServ.find(id).getProjectLead().getId().compareTo(userId) != 0) {
			return "redirect:/dashboard";
		}
		
		if(result.hasErrors()) {
			return "editpro";
		} else {
			projectServ.update(project);
			return "redirect:/projects/" + id;
		}
	}
	
	@DeleteMapping("/{id}")
	public String deletePro(@PathVariable("id") Long id, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		if(projectServ.find(id).getProjectLead().getId().compareTo(userId) != 0) {
			return "redirect:/dashboard";
		}
		
		projectServ.delete(id);
		
		return "redirect:/dashboard";
	}
	
	@PutMapping("/{id}/join")
	public String joinPro(@PathVariable("id") Long id, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		User user = userServ.find(userId);
		
		projectServ.join(id, user);
		
		return "redirect:/dashboard";
	}
	
	@PutMapping("/{id}/leave")
	public String leavePro(@PathVariable("id") Long id, HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		User user = userServ.find(userId);
		
		projectServ.leave(id, user);
		
		return "redirect:/dashboard";
	}
}
