package com.tyyagoo.desafiofinal.salesman;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@ControllerAdvice
public class SalesmanControllerAdvice {

    @ResponseBody
    @ExceptionHandler(SalesmanNotFoundException.class)
    ResponseEntity<?> handleSalesmanNotFound(SalesmanNotFoundException exception) {
        Map<String, String> body = Map.of("message", exception.getMessage()); // ugly
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
    }
}
