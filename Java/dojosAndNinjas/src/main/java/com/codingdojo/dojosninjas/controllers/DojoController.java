package com.codingdojo.dojosninjas.controllers;

import java.util.List;

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

import com.codingdojo.dojosninjas.models.Dojo;
import com.codingdojo.dojosninjas.services.DojoService;

@Controller
@RequestMapping("/dojos")
public class DojoController {
	@Autowired
	DojoService dojoServ;
	
	@GetMapping("")
	public String index(Model model, @ModelAttribute("dojo") Dojo dojo) {
		List<Dojo> dojos = dojoServ.allDojos();
		model.addAttribute("dojos", dojos);
		return "index";
	}
	
	@PostMapping("")
	public String createDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result) {
		if (result.hasErrors()) {
			return "index";
		} else {
			dojoServ.createDojo(dojo);
			return "redirect:/dojos";
		}
	}
	
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoServ.findDojo(id);
		model.addAttribute("dojo", dojo);
		
		return "show";
	}
	
}
