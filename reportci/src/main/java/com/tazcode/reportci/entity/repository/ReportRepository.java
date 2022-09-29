package com.tazcode.reportci.entity.repository;

import com.tazcode.reportci.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ReportRepository extends JpaRepository<Report, Long> {
}
