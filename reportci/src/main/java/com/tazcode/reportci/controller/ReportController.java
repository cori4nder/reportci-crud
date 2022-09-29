package com.tazcode.reportci.controller;

import com.tazcode.reportci.entity.Report;
import com.tazcode.reportci.entity.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1")
@CrossOrigin("*")
public class ReportController {

    @Autowired
    private ReportRepository eRepo;

    @GetMapping("/reports")
    public List<Report> getAllReports() {
        return eRepo.findAll();
    }
}