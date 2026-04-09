# E-commerce Product Management System

## Overview

This project is a TypeScript application that works with product data from an external API. The goal was to apply what I learned about async/await, object-oriented programming, and organizing code into separate modules.

## What the project does

* Fetches product data from an API
* Uses a Product class to organize and display product information
* Calculates discount amounts
* Calculates tax based on product category
* Handles errors using a custom error class

## How it’s organized

* `models/` – contains the Product class
* `services/` – handles API requests
* `utils/` – includes discount, tax, and error handling functions
* `main.ts` – runs the application

## How to run it

1. Install dependencies:
   npm install

2. Run the program:
   npx ts-node src/main.ts

## Notes

This project helped reinforce how different parts of an application work together, especially working with APIs, using classes, and keeping code organized.
