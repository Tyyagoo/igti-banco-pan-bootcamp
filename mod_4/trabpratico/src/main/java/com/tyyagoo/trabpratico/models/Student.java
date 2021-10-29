package com.tyyagoo.trabpratico.models;

import java.util.Objects;

public class Student {
    String registration;
    String name;
    String course;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(registration, student.registration) && Objects.equals(name, student.name) && Objects.equals(course, student.course);
    }

    @Override
    public String toString() {
        return "Student{" +
                "registration='" + registration + '\'' +
                ", name='" + name + '\'' +
                ", course='" + course + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(registration, name, course);
    }

    public String getRegistration() {
        return registration;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
