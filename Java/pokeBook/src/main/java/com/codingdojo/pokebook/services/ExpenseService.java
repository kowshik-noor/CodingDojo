package com.codingdojo.pokebook.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.pokebook.models.Expense;
import com.codingdojo.pokebook.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	@Autowired
	ExpenseRepository expenseRepo;
	
	public List<Expense> allExpenses() {
		return expenseRepo.findAll();
	}
	
	public Expense createExpense(Expense e) {
		return expenseRepo.save(e);
	}
	
	public Expense findExpense(Long id) {
		Optional<Expense> optExpense = expenseRepo.findById(id);
		if (optExpense.isPresent()) {
			return optExpense.get();
		} else {
			return null;
		}
	}
	
	public void deleteExpense(Long id) {
		expenseRepo.deleteById(id);
	}
	
	public Expense updateExpense(Expense e) {
		Expense expense = this.findExpense(e.getId());
		
		if (expense == null) {
			return expense;
		}
		
		expense.setAmount(e.getAmount());
		expense.setDescription(e.getDescription());
		expense.setName(e.getName());
		expense.setVendor(e.getVendor());
		
		expenseRepo.save(expense);
		return expense;
	}
}
