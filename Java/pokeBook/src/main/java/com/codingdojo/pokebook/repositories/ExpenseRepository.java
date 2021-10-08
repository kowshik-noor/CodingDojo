package com.codingdojo.pokebook.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.pokebook.models.Expense;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {
//	retrieve all expenses from the database
	List<Expense> findAll();
}
