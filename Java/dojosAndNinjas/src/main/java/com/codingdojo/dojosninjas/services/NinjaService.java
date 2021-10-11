package com.codingdojo.dojosninjas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.dojosninjas.models.Ninja;
import com.codingdojo.dojosninjas.repositories.NinjaRepository;

@Service
public class NinjaService {
	@Autowired
	NinjaRepository ninjaRepo;
	
	public Ninja createNinja(Ninja n) {
		return ninjaRepo.save(n);
	}
}
