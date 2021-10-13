package com.codingdojo.productcategory.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.productcategory.models.Category;
import com.codingdojo.productcategory.models.Product;

public interface ProductRepo extends CrudRepository<Product, Long> {
	List<Product> findAll();
    List<Product> findAllByCategories(Category category);
    
    List<Product> findByCategoriesNotContains(Category category);

}
