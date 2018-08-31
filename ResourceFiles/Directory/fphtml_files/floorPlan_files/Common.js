function TopMenu(b,og) 
{ 
	var i,s,c,k,j,tN,hh;	
	var parNode;
	if(document.getElementById)
	{
		if(b.parentNode.tagName == 'SPAN')
		{
		    parNode = b.parentNode.parentNode;
		}
		else
		{
		    parNode = b.parentNode;
		}
		
			if(parNode && parNode.childNodes)
			{tN=parNode.childNodes;}
			else{return;}
			for(i=0;i<tN.length;i++)
			{
				if(tN[i].tagName=="DIV")
				{
					s=tN[i].style.display;
					hh=(s=="block")?"none":"block";
					if(og==1)
					{ hh="block";}
					if(document.getElementById('hdnExpandAlways').value == '1')
					{	
						tN[i].style.display="block";
					}
					else
					{
						tN[i].style.display=hh;
					}
					
				}
				
			}
			c=b.firstChild;
			/*
			if(c.data)
			{
				k=c.data;j=k.charAt(0);
				if(j=='+')
				{k='-'+k.substring(1,k.length);}
				else if(j=='-')
				{k='+'+k.substring(1,k.length);}
				c.data=k;
			}
			*/
			if(b.className=='Expand')
			{b.className='Contract';
			}
			else if(b.className=='Contract')
			{
				
				b.className='Expand';
				
			}
		
	}	
}

function FlipImage(b,og)
{
    var i,s,c,k,j,tN,hh;	
    var parNode;
	if(document.getElementById)
	{		
	   // alert(b.parentNode.tagName);
	    if(b.parentNode.tagName == 'SPAN')
		{
		    parNode = b.parentNode.parentNode;
		}
		else
		{
		    parNode = b.parentNode;
		}
		if(parNode && parNode.childNodes)
		{tN=parNode.childNodes;}
		else{return;}
		for(i=0;i<tN.length;i++)
		{
			if(tN[i].tagName=="DIV")
			{
				s=tN[i].style.display;
				hh=(s=="block")?"none":"block";
				if(og==1)
				{ hh="block";}
				if(document.getElementById('hdnExpandAlways').value == '1')
				{	
					tN[i].style.display="block";
				}
				else
				{
					tN[i].style.display=hh;
				}
				
			}
			
		}
		c=b.firstChild;
		
		if(b.src.indexOf("expand.gif") > -1)
		{
		    b.src='../images/contract.gif';
		}
		else if(b.src.indexOf("contract.gif") > -1)
		{			
			b.src='../images/expand.gif';			
		}		
			
	}	
}

/*
function ShowHideMenu()
{ 
	var i,x,d,hr,ha,ef,a,ag;
	if(document.getElementById)
	{
		alert("ShowHideMenu");
		d=document.getElementById('Mnav');
		if(d)
		{
			hr=window.location.href;
			//Get the full path from the qurystring.
			strFullPath="<%=Request.ServerVariables("PATH_INFO")%>";
			alert(strFullPath);
			alert("urlhref: " + hr);
			ha=d.getElementsByTagName("A");
			if(ha&&ha.length)
			{
				for(i=0;i<ha.length;i++)
				{
					if(ha[i].href)
					{
						//alert(ha[i].href);
						if(hr.indexOf(ha[i].href)>-1)
						{
							alert("current");
							ha[i].className="Current";
							a=ha[i].parentNode.parentNode;
							while(a)
							{
								if(a.firstChild && a.firstChild.tagName=="A")
								{
									if(a.firstChild.onclick)
									{
										ag=a.firstChild.onclick.toString();
										if(ag&&ag.indexOf("TopMenu")>-1)
										{
											TopMenu(a.firstChild,1);
										}
									}
								}
								a=a.parentNode;
							}
						}
					}
				}
			}
		}
	}
}

*/
function Mall(a)
{ 
	var i,x,ha,s,tN;
	if(document.getElementById)
	{
		ha=document.getElementsByTagName("A");
		for(i=0;i<ha.length;i++)
		{
			if(ha[i].onclick)
			{
				ag=ha[i].onclick.toString();
				if(ag&&ag.indexOf("TopMenu")>-1)
				{
					if(ha[i].parentNode && ha[i].parentNode.childNodes)
					{tN=ha[i].parentNode.childNodes;}
					else{break;}
					for(x=0;x<tN.length;x++)
					{
						if(tN[x].tagName=="DIV")
						{
							s=tN[x].style.display;
							if(a==0&&s!='block')
							{ TopMenu(ha[i]);}
							else if(a==1&&s=='block')
							{TopMenu(ha[i]);}
							break;
						}
					}
				}
			}
		}
	}
}

 //Mall(1);
function SetExpandImage()
{ 
	
	var i,x,d,tN,ag;
	if(document.getElementById)
	{
		d=document.getElementById('Mnav');
		if(d)
		{
			tN=d.getElementsByTagName("A");
			if(tN&&tN.length)
			{				
				for(i=0;i<tN.length;i++)
				{
					ag=(tN[i].onclick)?tN[i].onclick.toString():false;
					if(ag&&ag.indexOf("TopMenu")>-1)
					{
						if (tN[i].className != 'Contract')
						{
							//alert("Expand");
							tN[i].className='Expand';
						}
						else
						{
						//alert("contract");
							tN[i].className='Contract';
						}
					}
					else{tN[i].className='Default';}
				}
			}
		}
	}
	//alert("ShowHideMenu");
	//ShowHideMenu();
}




