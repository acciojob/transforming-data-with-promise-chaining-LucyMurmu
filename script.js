//your JS code here. If required.
const ip=document.getElementById("ip");
const btn=document.getElementById("btn");
const output=document.getElementById("output");

btn.addEventListener("click", ()=>{
	const num=Number(ip.value);

      new Promise((resolve)=>{
		setTimeout(()=>{
			output.textContent=`Result: ${num}`;
			resolve(num);
		},2000);
	}).then((value)=>{
		  return new Promise((resolve)=>{
			  setTimeout(()=>{
				  value=value*2;
				  output.textContent=`Result: ${value}`;
				  resolve(value);
			  },1000);
		  });
	}).then((value)=>{
		  return new Promise((resolve)=>{
			  setTimeout(()=>{
				  value=value-3;
				  output.textContent=`Result: ${value}`;
				  resolve(value);
			  },1000);
		  });
	}).then((value)=>{
		  return new Promise((resolve)=>{
			  setTimeout(()=>{
				  value=value/2;
				  output.textContent=`Result: ${value}`;
				  resolve(value);
			  },1000);
		  });
	}).then((value)=>{
		  return new Promise((resolve)=>{
			  setTimeout(()=>{
				  value=value+10;
				  output.textContent=`Final Result: ${value}`;
				  resolve(value);
			  },1000);
		  });
	}).catch((error)=>{
		console.error(error);
	});
});