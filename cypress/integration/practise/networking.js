///          <reference types="cypress" />

describe('request tseting', function(){

    it('Test Case first', function(){

        cy.request({
            method:'POST',
            url:'http://216.10.245.166/Library/Addbook.php',
            body:{name:'Learn Appium Automation with Java',
            isbn:'bcd',
            aisle:'227',
            author:'John foe'},
            failOnStatusCode: false 
        }).then(function(response)
        {
            //expect(response.body).to.have.property('Msg', 'successfully added')
            expect(response).to.have.property("status",404)
            cy.log(response.body)
        expect(response).to.have.property("body")  
          })
    })

    it("jsonplaceholder", function(){

        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
         .then((json) => console.log(json.body));
    })

    it('Test Case second', function(){

        cy.request({method:'GET',
        url:'http://dummy.restapiexample.com/api/v1/employees',
    failOnStatusCode: false}).then(function(response)
        {
            expect(response.body).to.have.property("status",'success')
            expect(response.status).to.eq(200)
        })
    })

    it('Test Case third', function(){

        cy.request({method:'POST',
        url:'http://dummy.restapiexample.com/api/v1/create',
        body:{name:"test",salary:"123",age:"23"},
        failOnStatusCode: false
    }).then(function(response){
            //expect(response.body).to.have.property('message', 'Error Occured! Page Not found, contact rstapi2example@gmail.com')
            expect(response.status).to.eq(406)
        })
        
    })
    it('Test Case forth', function(){

            cy.request('POST','http://216.10.245.166/Library/GetBook.php?AuthorName=somename').then(function(response)
            {
                //expect(response.json).to.deep.equal("Name", "bookname")
                expect(response.status).to.eq(200)
            })
        })

        it('Test Case fifth', function(){

            cy.request({
                method:'GET',
                url:'https://jsonplaceholder.typicode.com/posts/1',
                failOnStatusCode: false

            }).then(function(response){
                expect(response.status).to.eq(200)
                cy.log(response.body.body)
                expect(response.body).to.include({
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                  })
            })
        })

        it('Test case sixth',function(){

            cy.request({
                method:'POST',
                url:'https://reqres.in/api/users',
                body:{"name": "morpheus",
                "job": "leader"}
            }).then(function(response){
                console.log(response.status)
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property("name","morpheus")
                cy.log(response.body.name)
                
            })
        })
        it.only("camera", function(){

            cy.visit("https://demo.nopcommerce.com/nikon-d5500-dslr")
            cy.server()
            cy.route("POST","/addproducttocart/details/14/1").as("camera")
            cy.get("input#add-to-cart-button-14").click()
            cy.wait("@camera").then((xhr)=>{
                console.log(JSON.stringify(xhr.response.body, undefined, 4))
                console.dir(xhr.response)
                for(var x in xhr.response.body){
                    cy.log(x + xhr.response.body[x])
                }
                
            })
        })
})