package com.codingdojo.productcategory.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.codingdojo.productcategory.models.Category;
import com.codingdojo.productcategory.models.Product;
import com.codingdojo.productcategory.services.CategoryServ;
import com.codingdojo.productcategory.services.ProductServ;

@Controller
@RequestMapping("/categories")
public class CategoryController {
	@Autowired
	CategoryServ categoryServ;
	@Autowired
	ProductServ productServ;
	
	@GetMapping("")
	public String cat(Model model) {
		model.addAttribute("categories", categoryServ.allCat());
		return "cat";
	}
	
	@GetMapping("/new")
	public String newCat(@ModelAttribute("category") Category category) {
		return "newCat";
	}
	
	@PostMapping("")
	public String makeCat(@ModelAttribute("category") Category category) {
		categoryServ.newCat(category);
		return "redirect:/categories";
	}
	
	@GetMapping("/{id}")
	public String showCat(@PathVariable("id") Long id, Model model) {
		Category category = categoryServ.findCat(id);
		List<Product> products = productServ.emptyPro(category);
		model.addAttribute("products", products);
		model.addAttribute("category", category);
		
		return "showcat";
	}
	
	@PutMapping("/{id}/addpro")
	public String addPro(@PathVariable("id") Long cId, @RequestParam("product") Long pId) {
		categoryServ.addPro(cId, pId);
		return "redirect:/categories/" + cId;
	}
}
