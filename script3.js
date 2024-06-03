const data = { id: 1, name: 'Data One' };

function fetchData(id) {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (id === 1) {
 resolve(data); 
 }else {
 reject('Invalid ID');
 }
 }, 2000); 
 });
}
//Generating 0 or 1 randomly
const v = Math.floor(Math.random() * 2);
fetchData(v)
 .then(data => {
 console.log('Data fetched successfully:', data);
 })
 .catch(error => {
 console.error('Error fetching data:', error);
 });
