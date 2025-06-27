package com.example.suggestions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*") // To allow requests from your frontend
@RestController
@RequestMapping("/api/suggestions")
public class SuggestionController {

    @Autowired
    private SuggestionRepository repo;

    @PostMapping
    public String saveSuggestion(@RequestBody Suggestion suggestion) {
        repo.save(suggestion);
        return "Suggestion submitted successfully!";
    }
}

