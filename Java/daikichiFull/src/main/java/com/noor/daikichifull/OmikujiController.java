package com.noor.daikichifull;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/omikuji")
public class OmikujiController {
	@GetMapping("")
	public String index() {
		return "index.jsp";
	}
	
	@GetMapping("/show")
	public String show(HttpSession session, Model model) {
		int num = (int) session.getAttribute("num");
		String city = (String) session.getAttribute("city");
		String person = (String) session.getAttribute("person");
		String hobby = (String) session.getAttribute("hobby");
		
		return "show.jsp";
	}
}
