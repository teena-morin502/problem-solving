let url='https://fake-json-api.mock.beeceptor.com/companies'

fetch(url)
.then( response =>{
if(!response.ok){
  console.log('networkresponce was  not ok')
  return response.json();
  
}
})
.then(data =>{
    console.log(data)
    for(i=0;i<=data.length;i++){
        console.log(data.name[i]);
        console.log(data.address[i]);
        console.log("industry :" + data.industry[i]);
    }
})
.catch(error=>{
    console.error('fetch error:',error)
})
