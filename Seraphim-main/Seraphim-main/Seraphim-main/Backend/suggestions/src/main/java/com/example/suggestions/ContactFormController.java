package com.example.suggestions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")  // allow frontend to access this API
public class ContactFormController {

    @Autowired
    private ContactFormRepository repository;

    @PostMapping("/submit")
    public String submitContactForm(@RequestBody ContactForm form) {
        repository.save(form);
        return "Contact Form submitted successfully!";
    }
}
