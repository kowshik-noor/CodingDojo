package com.codingdojo.books.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.codingdojo.books.models.Book;
import com.codingdojo.books.services.BookService;

@Controller
public class BookController {
	@Autowired
	BookService bookServ;
	
	@GetMapping("books/{id}")
	public String show(@PathVariable("id") Long id, Model model) {
		Book book = bookServ.findBook(id);
		
		model.addAttribute("book", book);
		
		return "show";
	}
}
