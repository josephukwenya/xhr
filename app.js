// Single customer
document.getElementById("btn1").addEventListener('click', getCustomer);

function getCustomer(){
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'customer.json', true);
    
    xhr.onload = function(){
        if(this.status === 200){
            const user = JSON.parse(this.responseText);
            
            const view = `
                <ul>
                    <li>${user.id}</li>
                    <li>${user.name}</li>
                    <li>${user.company}</li>
                    <li>${user.location}</li>
                    <li>${user.phone}</li>
                </ul>
        `;
        document.getElementById("customer1").innerHTML = view;
        }
    }
    
    xhr.send(); 
}

// All customers
document.getElementById("btn2").addEventListener('click', getCustomers);

function getCustomers(){
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'customers.json', true);
    
    xhr.onload = function(){
        if(this.status === 200){
            const users = JSON.parse(this.responseText);
			
            let views = '';
            users.forEach(function(users){
                views += `
                    <ul>
                        <li>${users.id}</li>
                        <li>${users.name}</li>
                        <li>${users.company}</li>
                        <li>${users.location}</li>
                        <li>${users.phone}</li>
                    </ul>
            `;
                document.getElementById("customer2").innerHTML = views;
            })
        }
    }
    
    xhr.send();
}