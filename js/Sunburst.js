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
    outsidetextfont: { size: 20, color: "#377eb8" },
    // leaf: {opacity: 0.4},
    marker: { line: { width: 2 } },
}];

var layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    sunburstcolorway: ["#636efa", "#ef553b", "#00cc96"],
};


Plotly.newPlot('myDiv', data, layout, { showSendToCloud: false })