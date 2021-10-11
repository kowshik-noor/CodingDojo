package com.codingdojo.dojosninjas.repositories;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.dojosninjas.models.Ninja;

public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	
}
