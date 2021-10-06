package com.noor.daikichifull;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@SessionAttributes({"num", "city", "person", "thing", "hobby", "nice"})
@RequestMapping("/omikuji")
public class OmikujiController {
	@GetMapping("")
	public String index() {
		return "index";
	}
	
	@PostMapping("/add")
	public String addInfo (@RequestParam(value = "num") int num, @RequestParam(value = "city") String city, @RequestParam(value="person") String person, @RequestParam(value = "hobby") String hobby, @RequestParam(value="thing") String thing, @RequestParam(value="nice") String nice, Model model) {
		model.addAttribute("num", num);
		model.addAttribute("city", city);
		model.addAttribute("person", person);
		model.addAttribute("thing", thing);
		model.addAttribute("hobby", hobby);
		model.addAttribute("nice", nice);
		
		return "redirect:/omikuji/show";
	}
	
	
	@GetMapping("/show")
	public String show () {
		return "show";
	}
	
}
