package com.codingdojo.productcategory.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.productcategory.models.Category;
import com.codingdojo.productcategory.models.Product;
import com.codingdojo.productcategory.repositories.ProductRepo;

@Service
public class ProductServ {
	@Autowired
	ProductRepo productRepo;
	@Autowired
	CategoryServ categoryServ;
	
	public Product newPro(Product p) {
		return productRepo.save(p);
	}
	
	public List<Product> allPro() {
		return productRepo.findAll();
	}
	
	public Product findPro(Long id) {
		Optional<Product> product = productRepo.findById(id);
		if(product.isPresent()) {
			return product.get();
		} else {
			return null;
		}
	}
	
	public Product addCat(Long pId, Long cId) {
		Product product = findPro(pId);
		Category category = categoryServ.findCat(cId);
		
		product.getCategories().add(category);
		return productRepo.save(product);
	}
	
//	returns a list of products not containing a specific category
	public List<Product> emptyPro(Category category) {
		return productRepo.findByCategoriesNotContains(category);
	}
}
