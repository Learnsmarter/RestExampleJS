/**
 * The controller is used to collect and present data the user.
 
 * You may use third-party scripts to handle data presentation such as
 * moment.js for formatting dates.
 *
 * Please configure the endpoint to point to your REST API. You will be able
 * to control the fields returned within the REST API Widget within Learnsmarter Engage.
 */
 
(function(){
	
	/**
	 * REST API endpoint (configure according to your widget in Engage)
	 */
	const endpoint = 'https://ls-demo.force.com/customtest/services/apexrest/lsi/widget/REST';
	
	
	/**
	 * Handle REST API response for course list
	 */
	function getCourses() {
		Util.showPage('course-list');
		
		Util.callout(endpoint).then(courses => {
			const tableRows = [];
			
			const listItems = courses.map(course => {
				const tr = document.createElement('tr');
				const td = document.createElement('td');
				td.innerHTML = '<a href="index.html?courseId=' + Util.escapeOutput(course.Id) + '">' + Util.escapeOutput(course.Name) + '</a>';
				tr.appendChild(td);
				tableRows.push(tr);
			});
			
			Util.setTableRows('courses-table', tableRows);
		});
	}
	
	
	/**
	 * Handle REST API response for scheduled course list
	 */
	function getEvents(courseId) {
		Util.showPage('event-list');
		
		Util.callout(endpoint + '/' + courseId).then(res => {
			const tableRows = [];
			
			const listItems = res.events.map(evt => {
				const tr = document.createElement('tr');
				
				const td1 = document.createElement('td');
				td1.innerHTML = Util.escapeOutput(evt.lsc__StartDate__c);
				tr.appendChild(td1);
				
				const td2 = document.createElement('td');
				td2.innerHTML = Util.escapeOutput(evt.lsc__EndDate__c);
				tr.appendChild(td2);
				
				const td3 = document.createElement('td');
				td3.innerHTML = Util.escapeOutput(evt.lsc__PlacesLeft__c);
				tr.appendChild(td3);
				
				const td4 = document.createElement('td');
				td4.innerHTML = Util.escapeOutput(evt.Ccy_Selling_Price__c);
				tr.appendChild(td4);
				
				const td5 = document.createElement('td');
				td5.innerHTML = '<a href="' + res.addToBasketUrl + '?id=' + Util.escapeOutput(evt.Id) + '">Book</a>';
				tr.appendChild(td5);
			
				tableRows.push(tr);
			});
			
			document.getElementById('course-name').innerText = res.course.Name;
			
			Util.setTableRows('events-table', tableRows);
		});
	}
	
	
	/**
	 * Determine which content to display
	 */
	function init() {
		const urlParams = new URLSearchParams(window.location.search);
		
		if ( urlParams.has('courseId') ) {
			getEvents(urlParams.get('courseId'));
		} else {
			getCourses();
		}
	}
	
	window.onload = init;
})();