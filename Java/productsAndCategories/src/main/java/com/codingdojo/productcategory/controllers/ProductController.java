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
@RequestMapping("/products")
public class ProductController {
	@Autowired
	ProductServ productServ;
	@Autowired
	CategoryServ categoryServ;
	
	@GetMapping("")
	public String pro(Model model) {
		model.addAttribute("products", productServ.allPro());
		return "pro";
	}
	
	@GetMapping("/new")
	public String newPro(@ModelAttribute("product") Product product) {
		return "newpro";
	}
	
	@PostMapping("")
	public String makePro(@ModelAttribute("product") Product product) {
		productServ.newPro(product);
		return "redirect:/products";
	}
	
	@GetMapping("/{id}")
	public String showPro(@PathVariable("id") Long id, Model model) {
		Product product = productServ.findPro(id);
		List<Category> categories = categoryServ.emptyCat(product);
		model.addAttribute("categories", categories);
		model.addAttribute("product", product);
		return "showpro";
	}
	
	@PutMapping("/{id}/addcat")
	public String addCat(@RequestParam(value="category") Long cId, @PathVariable("id") Long pId) {
		productServ.addCat(pId, cId);
		return "redirect:/products/" + pId;
	}
}
