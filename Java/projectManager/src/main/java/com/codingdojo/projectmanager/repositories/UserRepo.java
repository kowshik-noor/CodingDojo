package com.codingdojo.projectmanager.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.codingdojo.projectmanager.models.User;

public interface UserRepo extends CrudRepository<User, Long> {
	Optional<User> findByEmail(String email);
}
