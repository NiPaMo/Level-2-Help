function display(){
	var person = document.getElementById("fName").value + "." + document.getElementById("lName").value;

	var crownAlarm = [LV1, LV2];
	var taskColdAlarm = [LV2];	
	var taskHotAlarm = [LV1, LV2];	
	var ridgingAlarm = [LV1, LV2, LV3, PRD];
    var stratModeAlarm = [LV1, LV2, LV3, PRD, TEC];
    var millStretchAlarm = [LV1, LV2, PRD, TEC];

	var i, j;
	var inner = 0;	

    document.getElementById("list").innerHTML = "";

	for (i = 0; i < crownAlarm.length; i++)
	{
		for (j = 0; j < crownAlarm[i].length; j++)
		{
			if (crownAlarm[i][j] == person) 
			{
				document.getElementById("list").innerHTML = "Crown Calculation Error";
				inner = 1;
				break;
			}	
		}
		if (inner) break;
	}
	
	inner = 0;
	for (i = 0; i < taskColdAlarm.length; i++)
	{
		for (j = 0; j < taskColdAlarm[i].length; j++)
		{
			if (taskColdAlarm[i][j] == person) 
			{
				document.getElementById("list").innerHTML += "<br/>Cold Task Restarts";
				inner = 1;
				break;
			}	
		}
		if (inner) break;
	}
	
	inner = 0;
	for (i = 0; i < taskHotAlarm.length; i++)
	{
		for (j = 0; j < taskHotAlarm[i].length; j++)
		{
			if (taskHotAlarm[i][j] == person) 
			{
				document.getElementById("list").innerHTML += "<br/>Hot Task Restarts";
				inner = 1;
				break;
			}	
		}
		if (inner) break;
	}
	
	inner = 0;
	for (i = 0; i < stratModeAlarm.length; i++)
	{
		for (j = 0; j < stratModeAlarm[i].length; j++)
		{
			if (stratModeAlarm[i][j] == person) 
			{
				document.getElementById("list").innerHTML += "<br/>Strategy Mode";
				inner = 1;
				break;
			}	
		}
		if (inner) break;
    }
    
    inner = 0;
	for (i = 0; i < millStretchAlarm.length; i++)
	{
		for (j = 0; j < millStretchAlarm[i].length; j++)
		{
			if (millStretchAlarm[i][j] == person) 
			{
				document.getElementById("list").innerHTML += "<br/>Mill Stretch";
				inner = 1;
				break;
			}	
		}
		if (inner) break;
	}
	
	inner = 0;
	for (i = 0; i < ridgingAlarm.length; i++)
	{
		for (j = 0; j < ridgingAlarm[i].length; j++)
		{
			if (ridgingAlarm[i][j] == person) 
			{
				document.getElementById("list").innerHTML += "<br/>Ridging";
				inner = 1;
				break;
			}	
		}
		if (inner) break;
	}
}