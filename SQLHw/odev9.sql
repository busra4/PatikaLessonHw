1-> SELECT city.city,country.country FROM city
INNER JOIN country ON city.country_id = country.country_id;


2-> SELECT payment.payment_id,customer.first_name,customer.last_name FROM payment
INNER JOIN customer ON customer.customer_id = payment.customer_id;


3-> SELECT rental.rental_id,customer.first_name,customer.last_name FROM customer
INNER JOIN rental ON customer.customer_id = rental.customer_id;
