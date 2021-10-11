package com.codingdojo.dojosninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.dojosninjas.models.Dojo;
import com.codingdojo.dojosninjas.models.Ninja;
import com.codingdojo.dojosninjas.services.DojoService;
import com.codingdojo.dojosninjas.services.NinjaService;

@Controller
@RequestMapping("/ninjas")
public class NinjaController {
	@Autowired
	NinjaService ninjaServ;
	
	@Autowired
	DojoService dojoServ;
	
	@GetMapping("")
	public String ninja(@ModelAttribute("ninja") Ninja ninja, Model model) {
		List<Dojo> dojos = dojoServ.allDojos();
		model.addAttribute("dojos", dojos);
		return "new";
	}
	
	@PostMapping("")
	public String createNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, @RequestParam(value="dojo") Long id) {
		if (result.hasErrors()) {
			System.out.println(result.getFieldError());
			return "new";
		} else {
			Dojo dojo = dojoServ.findDojo(id);
			ninja.setDojo(dojo);
			ninjaServ.createNinja(ninja);
			return "redirect:/dojos/" + id;
		}
	}
}
