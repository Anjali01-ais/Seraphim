package com.example.suggestions.controller;

import com.example.suggestions.model.Donation;
import com.example.suggestions.repository.DonationRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/donate")
@CrossOrigin(origins = "*")
public class DonationController {

    @Autowired
    private DonationRepository donationRepository;

    @PostMapping
    public String handleDonation(@Valid @RequestBody Donation donation) {
        donationRepository.save(donation);
        return "Donation received successfully!";
    }
}


