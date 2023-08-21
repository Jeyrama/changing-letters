/*
When provided with a String, capitalize all vowels
For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/


// Solution

function swap(st){
  return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}