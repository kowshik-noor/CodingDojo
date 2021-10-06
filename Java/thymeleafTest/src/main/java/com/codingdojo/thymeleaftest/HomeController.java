package com.codingdojo.thymeleaftest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes("something")
public class HomeController {
	@GetMapping
	String index(Model model) {
		model.addAttribute("something", "this is coming from the controller");
		return "index";
	}
	
	@GetMapping("/bruh")
	String bruh() {
		return "index";
	}
}
