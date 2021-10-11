package com.codingdojo.bookclub.controllers;

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

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.models.User;
import com.codingdojo.bookclub.services.BookService;
import com.codingdojo.bookclub.services.UserService;

@Controller
@RequestMapping("/books")
public class BookController {
	@Autowired
	UserService userServ;
	@Autowired
	BookService bookServ;
	
	@GetMapping("")
	public String books(Model model, HttpSession session) {
		Long id = (Long) session.getAttribute("user_id");
		if (id == null) {
			return "redirect:/";
		}
		
		User user = userServ.find(id);
		
		model.addAttribute("user", user);
		model.addAttribute("books", bookServ.allBooks());
		
		return "books";
	}
	
	@GetMapping("/new")
	public String create(HttpSession session, @ModelAttribute("book") Book book) {
		Long id = (Long) session.getAttribute("user_id");
		if (id == null) {
			return "redirect:/";
		}
		
		return "new";
	}
	
	@PostMapping("")
	public String make(@Valid @ModelAttribute("book") Book book, BindingResult result, HttpSession session) {
		if (result.hasErrors()) {
			return "new";
		} else {
			Long id = (Long) session.getAttribute("user_id");
			User user = userServ.find(id);
			book.setUser(user);
			bookServ.createBook(book);
			return "redirect:/books";
		}	
	}
	
	@GetMapping("/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Book book = bookServ.findBook(id);
		model.addAttribute("book", book);
		return "show";
	}
}
