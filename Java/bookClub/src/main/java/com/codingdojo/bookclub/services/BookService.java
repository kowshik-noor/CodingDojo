package com.codingdojo.bookclub.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.bookclub.models.Book;
import com.codingdojo.bookclub.repositories.BookRepository;

@Service
public class BookService {
	@Autowired
	BookRepository bookRepo;
	
	public Book createBook(Book b) {
		return bookRepo.save(b);
	}
	
	public List<Book> allBooks() {
		return bookRepo.findAll();
	}
	
	public List<Book> allAvailableBooks() {
		return bookRepo.findByBorrower(null);
	}
	
	public Book findBook(Long id) {
		Optional<Book> book = bookRepo.findById(id);
		if (book.isPresent()) {
			return book.get();
		} else {
			return null;
		}
	}
	
	public Book updateBook(Book b) {
		Book book = this.findBook(b.getId());
		
		if(book == null) {
			return book;
		}
		
		book.setAuthor(b.getAuthor());
		book.setThoughts(b.getThoughts());
		book.setTitle(b.getTitle());
		
		bookRepo.save(book);
		return book;
	}
	
	public void deleteBook(Long id) {
		bookRepo.deleteById(id);
	}
}
