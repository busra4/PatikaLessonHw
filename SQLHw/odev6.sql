1-> SELECT AVG(rental_rate) FROM film;
--sonuc : 2.98

2-> SELECT COUNT(*) FROM film 
WHERE title LIKE 'C%';
--sonuc : 92

3-> SELECT MAX(length) FROM film 
WHERE rental_rate = 0.99;
--sonuc : 184

4-> SELECT COUNT(DISTINCT(replacement_cost)) FROM film
WHERE length>150; 
-- sonuc: 21
