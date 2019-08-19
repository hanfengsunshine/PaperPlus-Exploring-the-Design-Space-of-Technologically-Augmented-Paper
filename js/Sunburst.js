var data = [{
    type: "sunburst",
    ids: [
        'Task', 'Interface', 'Context', 'Interaction', 'User', 'Intrinsic Properties', 'Durability', 
		'Digitally Extended Properties', 'Spatiality', 'Temporality', 'Environment', 
		'Range of Content Input', 'Content Navigation', 'Physical Manipulation', 
		'Collaboration', 'Feedback', 'Personalization', 'Privacy', 'Security', 'Accessibility', 'Cost', 
		'Information Affordance', 'Physical Reconfigurability', 'Digitalization', 
		'Exploration', 'Organization', 'Findability', 'Information Volume', 'Information Variety'
    ],
    labels: [
        'Task', 'Interface', 'Context', 'Interaction', 'User', 'Intrinsic<br>Properties', 
		'Digitally Extended<br>Properties', 'Spatiality', 'Temporality', 'Environment', 
		'Spatiality', 'Temporality', 'Environment',
		'Range of<br>Content Input', 'Content<br>Navigation', 'Physical<br>Manipulation', 
		'Collaboration', 'Feedback', 'Personalization', 'Privacy', 'Security', 'Accessibility', 'Cost', 
		'Information<br>Affordance', 'Physical<br>Reconfigurability', 'Durability', 'Digitalization', 
		'Exploration', 'Organization', 'Findability', 'Information<br>Volume', 'Information<br>Variety'
    ],
    parents: [
        "", "", "", "Task", "Task", "Interface", "Interface", "Interface", "Context", "Context", "Context", 
		"Interaction", "Interaction", "Interaction", "Interaction", "Interaction", "User", "User", "User",
		"User", "Intrinsic Properties", "Intrinsic Properties", "Intrinsic Properties", "Digitally Extended Properties",
		"Content Navigation", "Content Navigation", "Content Navigation", "Information Affordance", "Information Affordance"
    ],
	/*text: [
		'', '', '', '', '', '', 'The time before a product becomes unreliable or unusable.', 
		'', 'How bounded a system is with space.', 'How bounded a system is with time. ', 'How bounded a system is with the surrounding environment. ', 
		'Number of ways information can be added onto a product', 
		'', 'Interaction with a product as a physical object ', 
		'To work with others. ', 'Responses to user actions- Good feedback is supposed to make the results of different user actions clear.', 
		'Changing parts of product to match user preferences', 
		'Ability to control how much of your own personal information is shared with others', 
		'Safety of your information.', 
		'How usable a product is different users with a wide variety of characteristics and backgrounds', 
		'The price of purchasing and using a device.', 
		'', 'How easy it is to change the physical shape of a product', 
		'How easy it is to convert into a digital form.', 
		'Viewing, examining, and understanding the information presented', 
		'Arranging the information presented into an ordered format', 
		'Ease of finding a specific piece of information', 
		'The amount of information that a particular product contains', 
		'The number of different formats of information presented.'],
    outsidetextfont: { size: 20, color: "#377eb8" },*/
    // leaf: {opacity: 0.4},
    marker: { line: { width: 2 } },
	
}];

var layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    sunburstcolorway: ["#636efa", "#ef553b", "#00cc96"],
};


Plotly.newPlot('myDiv', data, layout, { showSendToCloud: false })