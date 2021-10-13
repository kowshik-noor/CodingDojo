package com.codingdojo.bookclub.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.models.User;

public interface BookRepository extends CrudRepository<Book, Long> {
	List<Book> findAll();
	List<Book> findByBorrower(User u);
}
