/**
 * Utilities are helper methods for multi-use purposes.
 */

const Util = {
	/**
	 * Call out to the REST API
	 */
	callout: function(url) {
		console.log('callout('+url+')');
		
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*; q=0.01');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			xhr.onload = function () {
				console.log('response');
				console.log(JSON.parse(xhr.responseText));
				resolve(JSON.parse(xhr.responseText));
			};
			xhr.send();
		});
	},


	/**
	* Display the specified page and hide the other
	*/
	showPage: function(pageName) {
		document.getElementById('course-list').style.display = pageName == 'course-list' ? '' : 'none';
		document.getElementById('event-list').style.display = pageName == 'event-list' ? '' : 'none';
	},


	/**
	* Clear the specified table and add a new specified set of rows
	*/
	setTableRows: function(tableId, rows) {
		const table = document.getElementById(tableId);
		const tbody = table.getElementsByTagName('tbody')[0];

		while ( tbody.lastChild ) {
			tbody.removeChild(tbody.lastChild);
		}

		rows.forEach(row => tbody.appendChild(row));
	},

	/**
	* Make the output safe by replacing HTML entities
	*/
	escapeOutput: function(str) {
		return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}
}