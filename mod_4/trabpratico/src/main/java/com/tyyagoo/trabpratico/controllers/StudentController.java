package com.tyyagoo.trabpratico.controllers;

import com.tyyagoo.trabpratico.models.Student;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping(path = "/students")
public class StudentController {
    private ArrayList<Student> students = new ArrayList<>();

    @GetMapping()
    public ArrayList<Student> getStudents() {
        return students;
    }

    @PostMapping()
    public Student createStudent(@RequestBody Student student) {
        students.add(student);
        return student;
    }
}
