package com.codingdojo.projectmanager.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.projectmanager.models.LoginUser;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.services.ProjectServ;
import com.codingdojo.projectmanager.services.UserServ;

@Controller
public class HomeController {
    @Autowired
    private UserServ userServ;
    @Autowired
    private ProjectServ projectServ;
    
    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index";
    }
    
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser, 
        BindingResult result, Model model, HttpSession session) {
        userServ.register(newUser, result);
        if(result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index";
        }
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/dashboard";
    }
    
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin, 
        BindingResult result, Model model, HttpSession session) {
        User user = userServ.login(newLogin, result);
        if(result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index";
        }
        session.setAttribute("user_id", user.getId());
        return "redirect:/dashboard";
    }
    
    @GetMapping("/logout")
    public String logout(Model model, HttpSession session) {
    	session.invalidate();
    	return "redirect:/";
    }
    
    @GetMapping("/dashboard") 
    public String dashboard(HttpSession session, Model model) {
		Long id = (Long) session.getAttribute("user_id");
		if (id == null) {
			return "redirect:/";
		}
		
		User user = userServ.find(id);
		model.addAttribute("user", user);
		model.addAttribute("projects", projectServ.findUnjoined(user));
    	return "dashboard";
    }
    
}
