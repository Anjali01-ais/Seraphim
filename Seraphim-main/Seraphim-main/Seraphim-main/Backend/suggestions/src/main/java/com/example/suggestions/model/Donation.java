package com.example.suggestions.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Donation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Full name is required")
    private String fullName;

    @Email(message = "Email should be valid")
    @NotBlank
    private String email;

    @NotNull(message = "Amount is required")
    @Min(value = 1, message = "Donation must be at least 1 INR")
    private Integer donationAmount;

    @NotBlank(message = "Payment method is required")
    private String paymentMethod;
}
