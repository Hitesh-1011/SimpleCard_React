import React from 'react';

function loaddata(){
	fetch('./details.json')
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		data.forEach(function(Data){
			html=`
    			<h2>${Data.name}</h2>
    			<h3>${Data.job}</h3>
			`;
		});
		document.getElementById('').innerHTML=html;
	})
}

export default loaddata;