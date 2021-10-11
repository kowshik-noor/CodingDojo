package com.codingdojo.dojosninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.dojosninjas.models.Dojo;
import com.codingdojo.dojosninjas.repositories.DojoRepository;

@Service
public class DojoService {
	@Autowired
	DojoRepository dojoRepo;
	
	public List<Dojo> allDojos() {
		return dojoRepo.findAll();
	}
	
	public Dojo createDojo(Dojo d) {
		return dojoRepo.save(d);
	}
	
	public Dojo findDojo(Long id) {
		Optional<Dojo> optDojo = dojoRepo.findById(id);
		if (optDojo.isPresent()) {
			return optDojo.get();
		} else {
			return null;
		}
	}

}
