package com.vinicius.catalogodeveiculos.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class CatalogoController {
  @GetMapping("/")
  public String getMethodName() {
    return new String("Olá Mundo");
  }

}
