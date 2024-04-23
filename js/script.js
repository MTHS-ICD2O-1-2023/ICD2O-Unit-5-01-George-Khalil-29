// Copyright (c) 2024 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: Apr 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function checks if the user has selected the random number form above
 */

function checkNumber(){
  // input
  const userNumber = parseInt(document.getElementById("userNumber").value)

  // process
  if (userNumber == randomNumber){
    // output
    document.getElementById("result").innerHTML = 
     "You have guessed the correst number!"
  }

  if (userNumber != randomNumber) {
    // output
    document.getElementById("result").innerHTML =
      "You have guessed the wrong number!"
  }
}