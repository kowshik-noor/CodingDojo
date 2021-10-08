package com.codingdojo.pokebook.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.pokebook.models.Expense;
import com.codingdojo.pokebook.services.ExpenseService;

@Controller
public class PokebookController {
	@Autowired
	ExpenseService expenseServ;
	
	@GetMapping("/expenses")
	public String index(@ModelAttribute("expense") Expense expense, Model model) {
		List<Expense> expenses = expenseServ.allExpenses();
		model.addAttribute("expenses", expenses);
		return "index";
	}
	
	@PostMapping("/expenses")
	public String create(@Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
		if (result.hasErrors()) {
			return "index";
		} else {
			expenseServ.createExpense(expense);
			return "redirect:/expenses";
		}
	}
}
