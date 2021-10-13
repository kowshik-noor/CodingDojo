package com.codingdojo.productcategory.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.productcategory.models.Category;
import com.codingdojo.productcategory.models.Product;
import com.codingdojo.productcategory.repositories.CategoryRepo;

@Service
public class CategoryServ {
	@Autowired
	CategoryRepo categoryRepo;
	
	@Autowired
	ProductServ productServ;
	
	public Category newCat(Category c) {
		return categoryRepo.save(c);
	}
	
	public List<Category> allCat() {
		return categoryRepo.findAll();
	}
	
	public Category findCat(Long id) {
		Optional<Category> cat = categoryRepo.findById(id);
		if(cat.isPresent()) {
			return cat.get();
		} else {
			return null;
		}
	}
	
	public Category addPro(Long cId, Long pId) {
		Category category = findCat(cId);
		Product product = productServ.findPro(pId);
		
		category.getProducts().add(product);
		return categoryRepo.save(category);
	}
	
//	returns a list of categories not containing a specific product
	public List<Category> emptyCat(Product product) {
		return categoryRepo.findByProductsNotContains(product);
	}
}
