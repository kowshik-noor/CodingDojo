package com.codingdojo.bookclub.controllers;

import java.util.List;

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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
		
		List<Book> books = bookServ.allAvailableBooks();
		
		model.addAttribute("books", books);
		
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
			book.setOwner(user);
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
	
	@GetMapping("/{id}/edit")
	public String edit(@PathVariable("id") Long id, Model model, HttpSession session, RedirectAttributes redirectAttributes) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		Book book = bookServ.findBook(id);
		
		if (book.getOwner().getId().compareTo(userId) != 0) {
			redirectAttributes.addFlashAttribute("authorization", "You are not authorized to edit this book!");
			return "redirect:/books";
		}
		
		model.addAttribute("book", book);
		
		return "edit";
	}
	
	@PutMapping("/{id}")
	public String update(@Valid @ModelAttribute("book") Book book, 
			BindingResult result, @PathVariable("id") Long id,
			HttpSession session, RedirectAttributes redirectAttributes) {
		
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		Long ownerId = bookServ.findBook(id).getOwner().getId();
		
		if (ownerId.compareTo(userId) != 0) {
			redirectAttributes.addFlashAttribute("authorization", "You are not authorized to edit this book!");
			return "redirect:/books";
		}
		
		if(result.hasErrors()) {
			return "edit";
		} else {
			bookServ.updateBook(book);
			return "redirect:/books/" + id;
		}			
	}
	
	@DeleteMapping("/{id}")
	public String destroy(@PathVariable("id") Long id, HttpSession session, RedirectAttributes redirectAttributes) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		Long ownerId = bookServ.findBook(id).getOwner().getId();
		
		if (ownerId.compareTo(userId) != 0) {
			redirectAttributes.addFlashAttribute("authorization", "You are not authorized to edit this book!");
			return "redirect:/books";
		}
		
		bookServ.deleteBook(id);
		return "redirect:/books";
	}
	
	
	@PutMapping("/{id}/borrow")
	public String borrow(@PathVariable("id") Long id,
			HttpSession session) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		User user = userServ.find(userId);
		Book book = bookServ.findBook(id);
		book.setBorrower(user);
		bookServ.updateBook(book);
		
		return "redirect:/books";
	}
	
	@PutMapping("/{id}/return")
	public String returnBook(@PathVariable("id") Long id,
			HttpSession session,
			RedirectAttributes redirectAttributes) {
		Long userId = (Long) session.getAttribute("user_id");
		if (userId == null) {
			return "redirect:/";
		}
		
		Long borrowerId = bookServ.findBook(id).getBorrower().getId();
		
		if (borrowerId.compareTo(userId) != 0) {
			redirectAttributes.addFlashAttribute("authorization", "You are not authorized to return this book!");
			return "redirect:/books";
		}
		
		Book book = bookServ.findBook(id);
		book.setBorrower(null);
		bookServ.updateBook(book);
		
		return "redirect:/books";
	}
}
