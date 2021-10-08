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
	
	public Expense updateExpense(Long id, 
			String name, 
			String vendor, 
			Double amt,
			String desc) {
		Expense expense = this.findExpense(id);
		if (expense == null) {
			return null;
		}
		
		expense.setAmount(amt);
		expense.setDescription(desc);
		expense.setName(name);
		expense.setVendor(vendor);
		expenseRepo.save(expense);
		return expense;
	}
}
